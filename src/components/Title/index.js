import React, { Component } from 'react';
import { UserContext } from '../../context/userContext';

class Title extends Component {
    static contextType = UserContext;

    render() {
        const { name } = this.context;

        return (
            <h1>{name}</h1>
        )
    }
}

export default Title;