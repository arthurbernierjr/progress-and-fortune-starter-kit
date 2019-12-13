import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from './Home.js';

class App extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Arthur'
		};
	}
	clickedBtn = () => {};
	async test() {}
	render() {
		return (
			<div className="Page-wrapper">
				<Home />
			</div>
		);
	}
}

const app = document.getElementById('app');

ReactDOM.render(<App />, app);
