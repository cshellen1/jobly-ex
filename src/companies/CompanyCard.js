import React from "react";
import { Link } from "react-router-dom";

function CompanyCard({ description, name, logoUrl, handle }) {
	return (
		<Link className="CompanyCard card" to={`/companies/${handle}`}>
			<div className="card-body text-center">
				<h5 className="card-title">{name}
				{logoUrl && (
					<img src={logoUrl} alt="Company logo" className="card-img float-right w-25" />
				)}</h5>
				<p className="card-text">{description}</p>
			</div>
		</Link>
	);
}

export default CompanyCard;
