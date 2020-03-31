import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    border: 1px solid black;
    background-color: orange;
    height: 100px;
    width: 100px;
    position: relative;
`;

export default function Cat(props) {
    const { mouse } = props;

    return (
        <Box style={{ left: mouse.x, top: mouse.y }} />
    )
}