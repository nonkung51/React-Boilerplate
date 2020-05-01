import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { asyncClick, syncClick } from '../actions';
import Home from './Home';

const About = props => {
	return (
		<div>
			<h1>About!</h1>
		</div>
	);
};

const App = props => {
	const store = useSelector(state => state);
	const dispatch = useDispatch();
	console.log(store);
	return (
		<div className='container'>
			<div>
				<button
					onClick={() =>
						dispatch(syncClick())
					}
				>
					syncClick!
				</button>
				<button
					onClick={() => dispatch(asyncClick())}
				>
					asyncClick!
				</button>
			</div>
			<BrowserRouter>
				<div>
					<Route exact path='/' component={Home} />
					<Route exact path='/about' component={About} />
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;