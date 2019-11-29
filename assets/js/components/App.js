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
			<Home>
				<span> This is where children go</span>
			</Home>
		);
	}
}

const app = document.getElementById('app');

ReactDOM.render(<App />, app);
