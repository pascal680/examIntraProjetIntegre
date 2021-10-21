import { React, useState } from 'react';
import ResultatListe from '../Resultat/ResultatListe';
import './Guess.css'

const Guessing = () => {
    const [values, setValues] = useState({
        name: "",
        guessUtilisateur: ""
    })

    const [reloadList, setReloadList] = useState(false)
    const [numeroRandom, setNumeroRandom] = useState()
    const [resultat, setResultat] = useState("")

    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value,
        })
    }

    const randomNumber = () =>{
        const numeroGenere = Math.floor(Math.random() * 6) + 1
        setNumeroRandom(numeroGenere)
        return numeroGenere

    }

    const verifierGagnant = (numeroGenere) =>{
        if(numeroGenere == parseInt(values.guessUtilisateur)){
            setResultat("Bravo")
        }else{
            setResultat("Manque")
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (values.name != "" && values.guessUtilisateur != "") {
            if (values.guessUtilisateur != 0 && values.guessUtilisateur <= 6) {
                const numeroRand = randomNumber()
                verifierGagnant(numeroRand)

                addGuess(numeroRand)
                setValues({
                    name: "",
                    guessUtilisateur: ""
                })
                
                setReloadList(false)
            }else{
                alert("Votre guess n'est pas valide, entrer un numero entre 1 et 6")
            }

        }else {
            alert("Remplissez les inputs")
        }


    }


    const addGuess = async (numeroRand) => {
            fetch("http://localhost:9191/guess/addGuess", {
                method: "POST",
                headers: { "Content-Type": "application/json; charset=UTF-8" },
                body: JSON.stringify({name : values.name, guessUtilisateur: parseInt(values.guessUtilisateur), guessRandom: numeroRand})
            })
                .then((res) => res.json())
                setReloadList(true)
        }
   








    return (
        <div className="form-container">
            <form className="register-form" onSubmit={handleSubmit}>
                <label>

                    Votre nom:
                    <input
                        value={values.name}
                        onChange={handleChange}
                        id="name"
                        className="form-field"
                        type="text"
                        name="name" />
                </label>
                <label>
                    Votre guess:
                    <input
                        value={values.guessUtilisateur}
                        onChange={handleChange}
                        id="guessUtilisateur"
                        className="form-field"
                        type="text"
                        name="guessUtilisateur" />
                </label>
                <button className="form-field" type="submit" style={{ marginLeft: 'auto', marginRight: 'auto'}}>
                    Coup de de
                </button>
            </form>

            <h1>{numeroRandom}</h1>
            <h1>{resultat}</h1>
            <ResultatListe reloadList={reloadList}></ResultatListe>
        </div>
    );
}

export default Guessing
