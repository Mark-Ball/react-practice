import React from 'react';

export default function HoverCounter(props) {
    const { count, incrementCount } = props;

    return (
        <h1 onMouseEnter={incrementCount}>Hovered {count} times</h1>
    )
}