import React from "react";
import { useState, useEffect } from "react";
import JoblyApi from "../api/api";
import JobCardList from "./JobCardList";
import LoadingSpinner from "../common/LoadingSpinner";

function Jobs() {
	const [jobs, setJobs] = useState(null);

	async function search() {
		const jobs = await JoblyApi.getJobs();
		setJobs(jobs);
	}

	useEffect(() => {
		search();
	}, []);

	if (!jobs) return <LoadingSpinner />;

	return (
		<div className="Jobs col-md-12">
			{jobs.length ? 
				<JobCardList jobs={jobs} />
				: <h5>No results found</h5>
			}
		</div>
	);
}

export default Jobs;
