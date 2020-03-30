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

const WarningSpace = styled.div`

	height: 26px;
`;

class Warning extends Component {
    render() {
        const { text } = this.props;

        return (
            <WarningSpace>
                <WarningText>
                    {text}
                </WarningText>
            </WarningSpace>
        )
    }
}

export default Warning;