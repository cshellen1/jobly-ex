import React, { useState, useEffect } from 'react';
import { useParams } from'react-router-dom';
import JoblyApi from '../api/api';
import LoadingSpinner from '../common/LoadingSpinner';
import JobCardList from '../jobs/JobCardList';  


function Company() {
  const { handle } = useParams();
  const [company, setCompany] = useState(null);
  
  useEffect(function getCompanyAndJobs() {
    async function getCompany() {
      const company = await JoblyApi.getCompany(handle);
      setCompany(company);
    }
    getCompany();
  }, [handle]);

  if (!company) return <LoadingSpinner />

  return (
		<div className="CompanyDetail col-md-8 offset-md-2 text-center">
			<h4>{company.name}</h4>
			<p>{company.description}</p>
			<JobCardList jobs={company.jobs} />
		</div>
	);
}

export default Company