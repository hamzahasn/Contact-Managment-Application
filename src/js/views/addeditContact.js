import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, ContactList, useHistory } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const AddEditContact = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	let history = useHistory();
	const theid = params.theid;
	console.log(theid);

	const [name, setName] = useState(typeof theid !== "undefined" ? store.contacts[theid].full_name : null);
	const [email, setEmail] = useState(typeof theid !== "undefined" ? store.contacts[theid].email : null);
	const [phone, setPhone] = useState(typeof theid !== "undefined" ? store.contacts[theid].phone : null);
	const [address, setAddress] = useState(typeof theid !== "undefined" ? store.contacts[theid].address : null);

	useEffect(
		() => {
			if (theid === "undefined") {
				setName("");
				setEmail("");
				setPhone("");
				setAddress("");
			}
		},
		[theid]
	);

	return (
		<div className="container">
			<form onSubmit={e => e.preventDefault()} className="mb-1">
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
						email="email"
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
				<button
					onClick={e =>
						actions.addContact({
							agenda_slug: "hamzas_awesome_agenda",
							full_name: name,
							email: email,
							phone: phone,
							address: address
						})
					}
					type="submit"
					className="btn btn-primary">
					Submit
				</button>
			</form>
			<Link to="/">Return Home</Link>
			{/* <button onClick={e => history.push("/")}>go somewhere</button> */}
		</div>
	);
};
