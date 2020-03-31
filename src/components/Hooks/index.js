import React, { useState, useEffect } from 'react';

function Hooks() {
    const [count, setCount] = useState(0);

    function handleSetCount() {
        setCount(count + 1)
    }

    // function is run after updating the DOM
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    })

    console.log(useEffect);

    return (
        <div>
            <p>You clicked { count } times</p>
            <button onClick={handleSetCount}>
                Click me
            </button>
        </div>
    )
}

export default Hooks;