import React from "react";

import CardList from "../components/CardList.js";
import SearchBox from "../components/SearchBox.js";
import Scroll from "../components/Scroll.js";
import ErrorBoundary from "../components/ErrorBoundary.js";

// css
import "./App.css";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: "",
		};

		console.log("constructed");
	}

	onSearchChange = (event) => {
		// console.log(event.target.value);
		this.setState({ searchfield: event.target.value });
	};

	componentDidMount() {
		console.log("component did mount");

		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((users) => this.setState({ robots: users }));
	}

	render() {
		const { robots, searchfield } = this.state;

		if (!robots.length) {
			return <h1 className="tc">Loading now</h1>;
		}

		const filteredRobots = robots.filter((robot) =>
			robot.name.toLowerCase().includes(searchfield.toLowerCase())
		);

		console.log("render");
		return (
			<div className="tc">
				<h1 className="f1">RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<Scroll>
					<ErrorBoundary>
						<CardList robots={filteredRobots} />
					</ErrorBoundary>
				</Scroll>
			</div>
		);
	}
}

export default App;
