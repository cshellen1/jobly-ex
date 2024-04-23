import React, {useContext, useState} from 'react';
import UserContext from '../auth/UserContext';

function JobCard({ id, title, equity, salary, companyName }) {
	
	const { hasAppliedToJob, applyToJob } = useContext(UserContext);
	const [applied, setApplied] = useState();

	React.useEffect(
		function updateAppliedStatus() {

			setApplied(hasAppliedToJob(id));
		},
		[id, hasAppliedToJob]
	);

	async function handleApply(evt) {
		if (hasAppliedToJob(id)) return;
		applyToJob(id);
		setApplied(true);
	}

  return (
		<div className="card-body text-center m-3 border border-primary">
			<h5 className="card-title">{title}</h5>
			<p className="card-text">Company: {companyName}</p>
			<p className="card-text">Equity: {equity}</p>
			<p className="card-text">Salary: {salary}</p>
			<button
				className="btn btn-danger font-weight-bold text-uppercase"
				onClick={handleApply}
				disabled={applied}>
				{applied ? "Applied" : "Apply"}
			</button>
		</div>
	);
}

export default JobCard