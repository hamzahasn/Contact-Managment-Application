import React, { Component } from "react";
import { Link, useParams, ContactList } from "react-router-dom";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<p>
			Made with <i className="fa fa-heart text-danger" /> by{" "}
			<a href="https://www.linkedin.com/in/hamza-hasnain/">Hamza Hasnain</a>
		</p>
	</footer>
);
