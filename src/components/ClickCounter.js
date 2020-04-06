import React from 'react';

export default function ClickCounter(props) {
    const { count, incrementCount } = props;
    
    return (
        <button onClick={incrementCount}>Clicked {count} times</button>
    )
}