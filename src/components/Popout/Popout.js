import React from 'react';
import styled from 'styled-components';

const PopoutContainer = styled.div`
    background-color: white;
    border: 1px solid black;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
`;

const Popout = () => {
    return (
        <PopoutContainer>
            Popout title
            <ul>
                <li>first</li>
                <li>second</li>
                <li>third</li>
            </ul>
        </PopoutContainer>
    )
};

export default Popout;