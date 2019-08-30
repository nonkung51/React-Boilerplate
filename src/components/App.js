import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import * as actions from '../actions';

const Home = (props) => {
	return (
		<div>
			<h1>Home!</h1>
		</div>
	);
}

const About = props => {
	return (
		<div>
			<h1>About!</h1>
		</div>
	);
};

class App extends React.Component {
	render() {
        console.log(this.props.store);
		return (
			<div className='container'>
				<div>
					<button onClick={this.props.syncClick}>syncClick!</button>
					<button onClick={this.props.asyncClick}>asyncClick!</button>
				</div>
				<BrowserRouter>
					<div>
						<Route exact path='/' component={Home} />
						<Route exact path='/about' component={About} />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

const mapStateToProps = ({store}) => {
	return {store: store};
}

export default connect(
	mapStateToProps,
	actions
)(App);