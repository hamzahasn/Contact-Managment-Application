import React from "react";
import { Link, useParams } from "react-router-dom";

export const Navbar = () => {
	const params = useParams();
	const theid = params.theid;
	console.log(theid);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<span className="container">
				{" "}
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Contact List</span>
				</Link>
				<div className="ml-auto">
					<Link to="/add">
						<button className="btn btn-success">Add New Contact</button>
					</Link>
				</div>
			</span>
		</nav>
	);
};
