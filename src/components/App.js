import React from 'react';
import Counter from './Counter';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';

function App() {
	return (
		<>
			<Counter
				render={(count, incrementCount) => (
					<ClickCounter
						count={count}
						incrementCount={incrementCount}
					/> 
				)}
			/>
			<Counter
				render={(count, incrementCount) => (
					<HoverCounter
						count={count}
						incrementCount={incrementCount}
					/> 
				)}
			/>
		</>
	)
}

export default App;