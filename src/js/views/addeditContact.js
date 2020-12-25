import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const AddEditContact = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const theid = params.theid;

	const [name, setName] = useState[typeof theid !== "undefined" ? store.contacts[theid].full_name : null];
	const [email, setEmail] = useState[typeof theid !== "undefined" ? store.contacts[theid].email : null];
	const [phone, setPhone] = useState[typeof theid !== "undefined" ? store.contacts[theid].phone : null];
	const [address, setAddress] = useState[typeof theid !== "undefined" ? store.contacts[theid].address : null];

	useEffect(
		() => {
			if (typeof theid === "undefined") {
				setName("");
				setEmail("");
				setPho("");
				setAddress("");
			}
		},
		[theid]
	);

	return (
		<div className="container">
			<form onSubmit={e => e.preventDefault()}>
				<div className="mb-3">
					<label htmlFor="fullName" className="form-label">
						Full name
					</label>
					<input
						type="text"
						className="form-control"
						id="fullName"
						value={name}
						onChange={e => setName(e.target.value)}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="email" className="form-label">
						Email
					</label>
					<input
						type="email"
						className="form-control"
						id="form-control"
						id="email"
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="phone" className="form-label">
						Phone
					</label>
					<input
						type="tel"
						className="form-control"
						id="phone"
						value={phone}
						onChange={e => setPhone(e.target.value)}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="address" className="form-label">
						Address
					</label>
					<input
						type="text"
						className="form-control"
						id="address"
						value={address}
						onChange={e => setAddress(e.target.value)}
					/>
				</div>
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
		</div>
	);
};
