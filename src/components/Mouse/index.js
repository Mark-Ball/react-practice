import React, { useState } from 'react';
import Cat from '../Cat';

export default function Mouse(props) {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    
    function handleMouseMove(event) {
        setX(event.clientX);
        setY(event.clientY);
        console.log(x, y);
    }
    
    return (
        <div style={{ height: '100vh' }} onMouseMove={handleMouseMove}>
            {props.render(x, y)}
        </div>
    )
}