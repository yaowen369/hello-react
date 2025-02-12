import './App.css';
import React, {useState} from "react";

export default function MyApp() {
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 1);
    }



    return (
        <div>
            <h1>欢迎来到我的应用</h1>
            <MyButton count={count} handleClick={handleClick} />
            <p/>
            <MyButton count={count} handleClick={handleClick} />
        </div>
    )
}

function MyButton({count, handleClick}) {



    return (
        <button onClick={handleClick}>
            点了 {count} 次
        </button>
    )
}
