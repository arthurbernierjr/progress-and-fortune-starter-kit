import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Home extends Component {
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
			<div className="home">
				<div className="Aligner">
					<div className="Aligner-item">
						<img src="http://progressandfortune.com/smac_images/profile.jpg" />
						<h1>Progress and Fortune Starter Kit</h1>
						<div className="menu">
							<ul>
								<li>
									<a href="http://arthurbernierjr.com/about" target="new">
										About Arthur
									</a>
								</li>
							</ul>
						</div>
						<div className="version-num">version 0.1.0</div>
						<br />
						<a
							className="github-button"
							href="https://github.com/arthurbernierjr/progress-and-fortune-starter-kit"
							data-icon="octicon-star"
							data-style="mega"
							data-count-aria-label="# stargazers on GitHub"
							aria-label="Star arthurbernierjr/progress-and-fortune-starter-kit on GitHub"
						>
							Star
						</a>
					</div>
				</div>
				<div className="Aligner-2">
					<div className="Aligner-item">{this.props.children}</div>
				</div>
			</div>
		);
	}
}
