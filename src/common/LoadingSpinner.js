import React from 'react'

function LoadingSpinner() {
	return (
		<div className="d-flex justify-content-center m-5">
			<div className="spinner-border text-primary" role="status">
				<span className="sr-only">Loading...</span>
			</div>
		</div>
	);
}
export default LoadingSpinner