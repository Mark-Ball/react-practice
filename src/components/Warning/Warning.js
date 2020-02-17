import React, { Component } from 'react';
import styled from 'styled-components';

const WarningText = styled.p`
    background-color: #eded40;
    border: 1px solid #91910c;
    border-radius: 3px;
    color: #91910c;
    font-family: Helvetica;
    line-height: 1.5em;
    padding-left: 1em;
    margin: 0;
`;

class Warning extends Component {
    render() {
        return (
            <WarningText>
                3 jobs were not displayed due to privacy settings
            </WarningText>
        )
    }
}

export default Warning;