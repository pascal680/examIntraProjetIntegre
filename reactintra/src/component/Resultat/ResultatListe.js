import { React, useState, useEffect } from 'react';


const ResultatListe = (reloadList) => {

    const [guesses, setGuesses] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:9191/guess/getAllGuess`)
            .then(res => {
                return res.json()
            })
            .then(data => {
                setGuesses(data)
            })
    }, [reloadList])


    // get all Guesses when page laod
    useEffect(() => {
        fetch('http://localhost:9191/guess/getAllGuess')
            .then(res => {
                return res.json()
            })
            .then((data) => {
                setGuesses(data)
            })
    }, [])



const guessesList = guesses.map((guess) =>
    <tr key={guess.id}>
        <td>{guess.name}</td>
        <td>{guess.guessUtilisateur}</td>
        <td>{guess.guessRandom}</td>
    </tr>);

return (
    <div>
        <table style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            <tr>
                <th>name</th>
                <th>Guess Utilisateur</th>
                <th>Numero Random</th>
            </tr>
            {guessesList}
        </table>

    </div>
)
}

export default ResultatListe
