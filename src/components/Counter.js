import React, { useState } from 'react';

// this component exists to handle the counter logic
// rendering is handled by another component
export default function Counter(props) {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    }

    return (
        <div>
            {props.render(count, incrementCount)}
        </div>
    )
}