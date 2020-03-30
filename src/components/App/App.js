import React, { Component } from 'react';
import Warning from '../Warning/Warning';
import Menu from '../Menu';

const UserContext = React.createContext('Mark');

class App extends Component {
	state = {
		showWarning: false,
	};

	handleClick = () => {
		this.setState(state => ({ 
			showWarning: !state.showWarning
		}));
	};

	render() {
		const { showWarning } = this.state;

    	return (
      		<>
				{showWarning && <Warning text={'warning text here'} />}
				<h1>This is App</h1>
				<button onClick={this.handleClick}>Warning</button>
				<Menu />
	  		</>
    	);
  	};
};

export default App;