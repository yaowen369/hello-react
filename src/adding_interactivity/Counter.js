import {useState} from "react";

import './styles.css'

export default function Counter() {
    const [score, setScore] = useState(0);

    function increment() {
        console.log('increment(), score:' + score);
        setScore( s => s + 1);
    }

    return (
        <>
            <button onClick={() => increment()}>+1</button>

            <button onClick={() => {
                console.log('1, score:' + score);
                increment();
                console.log('2, score:' + score);
                increment();
                console.log('3, score:' + score);
                increment();
                console.log('4, score:' + score);
            }}>+3</button>

            <h1>Score: {score}</h1>
        </>
    );
}
