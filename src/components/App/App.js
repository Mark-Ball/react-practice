import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from '../Menu';
import Hooks from '../Hooks';

class App extends Component {
	render() {
    	return (
			<BrowserRouter>
				<Route exact path='/' component={Menu} />
				<Route exact path='/hooks' component={Hooks} />
			</BrowserRouter>
    	);
  	};
};

export default App;