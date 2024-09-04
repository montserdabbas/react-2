import React, { useState, useEffect } from 'react'

export default function Counter() {

    const [count, setcount] = useState(0);
    const [name, setname] = useState("Montaser");

    const increment = () => {
        setcount(count + 1);
    }
    const decrement = () => {
        setcount(count - 1);
    }
    const changename = () => {
        setname("Ahmad");
    }
    function printHi() {
        console.log("Counter apdated");
    }
    useEffect(() => {
        printHi();
    }, [count])
    useEffect(() => {
        printnameupdated();
    }, [name])

    const printnameupdated = () => {
        console.log("Name Updated");
    }


    return (
        <div>
            <h1>Counter is {count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <h2>Name is {name}</h2>
            <button onClick={changename}>Change name</button>
        </div>

    )
}
