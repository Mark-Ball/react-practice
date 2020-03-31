import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from '../Menu';
import Hooks from '../Hooks';
import MouseTracker from '../MouseTracker';

class App extends Component {
	render() {
    	return (
			<BrowserRouter>
				<Route exact path='/' component={Menu} />
				<Route exact path='/hooks' component={Hooks} />
				<Route exact path='/mousetracker' component={MouseTracker} />
			</BrowserRouter>
    	);
  	};
};

export default App;