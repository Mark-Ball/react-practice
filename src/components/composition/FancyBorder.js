import React, { Component } from 'react';
import styled from 'styled-components';

const Border = styled.div`
    border: 3px dotted blue;
`;

class FancyBorder extends Component {
    render() {
        return (
            <Border>
                {this.props.children}
            </Border>
        )
    }
}

export default FancyBorder;