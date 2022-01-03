import React, { useState } from "react";

function DashBar() {
	const [name, setName] = useState("ethan");
	var today = new Date();
	function minuteFixer(date) {
		if (date.getMinutes() < 10) {
			return `0${date.getMinutes()}`;
		} else {
			return date.getMinutes();
		}
	}
	return (
		<div>
			<nav className="navbar">
				<span className="navbar-text">
					<div className="Welcome">Welcome back {name}!</div>
					<div className="TodayIs">Today is {`${today.toDateString()},`} </div>
					<div className="CurrentTime">
						{`${today.getHours()}:${minuteFixer(today)}`}
					</div>
				</span>
			</nav>
		</div>
	);
}

export default DashBar;
