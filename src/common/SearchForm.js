import React, { useState } from "react";

function SearchForm({ search }) {
	const [ searchItem, setSearchItem ] = useState("");

	function handleSubmit(e) {
    e.preventDefault();
    if (searchItem === "") {
      search(undefined);
    }
    else {
      search(searchItem);
    }
		
	}

	function handleChange(e) {
		setSearchItem(e.target.value);
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="input-group mb-3 m-2">
				<input
					type="text"
					name="searchItem"
					className="form-control"
					placeholder="search item"
					value={searchItem}
					onChange={handleChange}
					aria-label="search"
					aria-describedby="button-addon2"
				/>
				<div className="input-group-append">
					<button
						className="btn btn-primary"
						type="submit"
						id="submit-btn">
						Search
					</button>
				</div>
			</div>
		</form>
	);
}

export default SearchForm;
