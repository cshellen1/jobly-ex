import React from 'react';
import JobCard from './JobCard';

function JobCardList({jobs}) {
  return (
    <div>
     {jobs.map((job) => (
        <JobCard
          id={job.id}
          key={job.id}
          title={job.title}
          equity={job.equity}
          salary={job.salary}
          companyName={job.companyName}
        />
      ))}
    </div>
  )
}

export default JobCardList