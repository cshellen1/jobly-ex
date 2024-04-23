import React from "react";
import CompanyCard from "./CompanyCard";
import SearchForm from "../common/SearchForm";
import LoadingSpinner from "../common/LoadingSpinner";
import { useState, useEffect } from "react";
import JoblyApi from "../api/api";

function Companies() {
  const [companies, setCompanies] = useState(null);

  async function search(name) {
    const companies = await JoblyApi.getCompanies(name);
    setCompanies(companies);
  }

	useEffect(() => {
		search();
	}, []);

  if (!companies) return <LoadingSpinner />;

	return (
		<div className="Companies col-md-12">
      <SearchForm search={search} />
			{companies.length ? (
				<div className="row">
					{companies.map((company) => (
						<div className="col-md-4" key={company.handle}>
							<CompanyCard
								name={company.name}
								logoUrl={company.logoUrl}
								description={company.description}
								handle={company.handle}
							/>
						</div>
					))}
				</div>
			) : (
				<h5>No results found</h5>
			)}
		</div>
	);
}

export default Companies;
