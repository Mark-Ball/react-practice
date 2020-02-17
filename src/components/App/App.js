import React, { Component } from 'react';
import Warning from './../Warning/Warning';
import styled from 'styled-components';

const WarningSpace = styled.div`
	height: 24px;
`;

class App extends Component {
	state = {
		showWarning: false
	};

	handleClick = () => {
		const { showWarning } = this.state;

		this.setState({ showWarning: !showWarning });
	};

	render() {
		const { showWarning } = this.state;

    	return (
      		<>
			  	<WarningSpace>
					{showWarning && <Warning />}
				</WarningSpace>
				<h1>This is App</h1>
				<button onClick={this.handleClick}>Warning</button>
	  		</>
    	);
  	};
};

export default App;