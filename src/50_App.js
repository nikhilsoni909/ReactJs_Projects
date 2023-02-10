import React from "react";
import Die from "./components/50_dice.js"
import Confetti from 'react-confetti'
import useWindowSize from "@rooks/use-window-size"
import { nanoid } from "nanoid";//for genrating random id
export default function App() {
    const [dice, setDice] = React.useState(allNewDice());
    const [tenzies, setTenzies] = React.useState(false);
    React.useEffect(() => {
        const allHeld = dice.every(die => die.isHeld)
        const first = dice[0].value;
        const allsameval = dice.every(die => die.value === first)
        if (allHeld && allsameval) {
            setTenzies(true);
            console.log("you won");
        }
    }, [dice])
    function genrateNewDie() {
        return { value: Math.ceil(Math.random() * 6), isHeld: false, id: nanoid() }
    }
    function allNewDice() {
        const newDice = [];
        for (let i = 0; i < 10; i++) {
            newDice.push(genrateNewDie());
        }
        return newDice
    }

    function rollDice() {
        if (!tenzies) {
            setDice(oldDice => oldDice.map(die => {
                return die.isHeld ?
                    die :
                    genrateNewDie();

            }));
        }
        else {
            setTenzies(false);
            setDice(allNewDice())
        }

    }
    function holdDice(id) {
        setDice(oldDice =>
            oldDice.map(die => {
                return die.id === id ? { ...die, isHeld: !die.isHeld } :
                    die

            })
        )
    }

    const diceElements = dice.map(die => <Die kye={die.id} value={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.id)} />)
    const { width, height } = useWindowSize();
    console.log({ width });
    return (
        <main>
            {tenzies && <Confetti width={width}
                height={height} />}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {diceElements}
            </div>
            <button
                className="roll-dice"
                onClick={rollDice}>
                {tenzies ? "New Game" : "Roll"}
            </button>
        </main>
    )
}