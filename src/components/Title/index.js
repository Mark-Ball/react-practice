import React, { Component } from 'react';
import { UserContext } from '../../context/userContext';

class Title extends Component {
    render() {
        const { name } = this.context;

        return (
            <h1>{name}</h1>
        )
    }
}
Title.contextType = UserContext;

export default Title;