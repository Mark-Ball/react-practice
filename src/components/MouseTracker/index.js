import React from 'react';
import Mouse from '../Mouse';
import Cat from '../Cat';

function MouseTracker() {
    return (
        <>
            <h1>Move the mouse around</h1>
            <Mouse render={mouse => (
                <Cat mouse={mouse} />
            )} />
        </>
    )
}

export default MouseTracker;