import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const ContactList = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<ul className="list-group">
			{store.contacts.map((item, index) => {
				return (
					<li className="list-group-item" key={index}>
						<div className="row">
							<div className="col-3">
								<img
									src="https://www.flaticon.com/svg/static/icons/svg/236/236832.svg"
									className="rounded-circle"
								/>
							</div>
							<div className="col-6">
								<h5>{contact.full_name}</h5>
								<ul className="list-unstyled">
									<li>
										<i className="fas fa-map-marker-alt" />
										{contact.address}
									</li>
									<li>
										<i className="fas fa-phone" />
										{contact.phone}
									</li>
									<li>
										<i className="fas fa-envelope" />
										{contact.email}
									</li>
								</ul>
							</div>
							<div className="col-3" />
						</div>
					</li>
				);
			})}
		</ul>
	);
};

ContactList.propTypes = {
	match: PropTypes.object
};
