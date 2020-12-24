import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const ContactList = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<ul className="list-group container">
			{store.contacts.map((contact, index) => {
				return (
					<li className="list-group-item" key={index}>
						<div className="row">
							<div className="col-2">
								<img
									src="https://www.flaticon.com/svg/static/icons/svg/236/236832.svg"
									alt="contact Avatar"
									className="rounded-circle img-fluid"
								/>
							</div>
							<div className="col-8 text-left">
								<h5>{contact.full_name}</h5>
								<ul className="list-unstyled">
									<li>
										<div className="row">
											<div className="col">
												<i className="fas fa-map-marker-alt" />
											</div>
											<div className="col-11">{contact.address}</div>
										</div>
									</li>
									<li>
										<div className="row">
											<div className="col">
												<i className="fas fa-phone" />
											</div>
											<div className="col-11">{contact.phone}</div>
										</div>
									</li>
									<li>
										<div className="row">
											<div className="col">
												<i className="fas fa-envelope" />
											</div>
											<div className="col-11">{contact.email}</div>
										</div>
									</li>
								</ul>
							</div>
							<div className="col-2">
								<ul className="list-unstyled list-inline">
									<li className="list-inline-item">
										<i className="fas fa-pencil-alt" />
									</li>
									<li className="list-inline-item">
										<i className="fas fa-trash-alt" />
									</li>
								</ul>
							</div>
						</div>
					</li>
				);
			})}
		</ul>
	);
};
