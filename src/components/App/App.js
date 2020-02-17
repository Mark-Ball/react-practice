import React, { Component } from 'react';
import styled from 'styled-components';
import Warning from './../Warning/Warning';
import Popout from './../Popout/Popout';


const WarningSpace = styled.div`
	height: 24px;
`;

class App extends Component {
	state = {
		showWarning: false,
		showPopout: false
	};

	handleClick = () => {
		const { showWarning } = this.state;
		this.setState({ showWarning: !showWarning });
	};

	handlePopout = () => {
		const { showPopout } = this.state;
		this.setState({ showPopout: !showPopout });
	};

	render() {
		const { showWarning, showPopout } = this.state;

    	return (
      		<>
			  	<WarningSpace>
					{showWarning && <Warning />}
				</WarningSpace>
				<h1>This is App</h1>
				<button onClick={this.handleClick}>Warning</button>
				<button onClick={this.handlePopout}>Popout</button>
				{showPopout && <Popout />}
	  		</>
    	);
  	};
};

export default App;