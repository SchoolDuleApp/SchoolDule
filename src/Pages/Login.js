import "../App.css";
import "../Styles/Login.css";
// import react, { useState, button } from "react";
import React from "react";
// import { ReactDOM } from "react";
// import { GoogleLogin } from "react-google-login";
import SignUp from "../MainComponents/SignUpPage";
import logo from "./logo.png";

class Login extends React.Component {
	insertGapiScript() {
		const script = document.createElement("script");
		script.src = "https://apis.google.com/js/platform.js";
		script.onload = () => {
			this.initializedGoogleSignIn();
		};
		document.body.appendChild(script);
	}

	initializedGoogleSignIn() {
		window.gapi.load("auth2", () => {
			window.gapi.auth2.init({
				client_id:
					"411085253538-p5ocao04ea5msf12f5p6o8b7aksld72f.apps.googleusercontent.com",
			});
			console.log("Api inited");

			window.gapi.load("signin2", () => {
				const params = {
					onsuccess: () => {
						console.log("User has finished signing in!");
					},
				};
				window.gapi.signin2.render("loginButton", params);
			});
		});
	}

	componentDidMount() {
		console.log("loading");

		this.insertGapiScript();
	}
	render() {
		return (
			<div className="login">
				<h1  className = "Title">SchoolDule</h1>
				<div id="loginButton" className="loginButton"
				style = {{
					position: "absolute",
					width: "240px",
					height: "64px",
					left: "25%",
					top: "70%",			
				}}>
					Sign in with Google
				
				</div>
				<img src = { logo } alt = "logo" className = "logo" />

				<div className = "Body">

					<div className = "Content">
						<h2 className = "About">
							Everything you need to manage your schedule.
						</h2>
						<h3 className = "AboutDescription">
							We get it, life can be hectic sometimes. Manage school, work, and breaks with SchoolDule. Whether it's to stay on top of things or just be more organized, SchoolDule has got you covered. 
						</h3>
					</div> 

					<div className="photos">
						<img className = "upcomingTasksPhoto" src= "https://cdn.discordapp.com/attachments/925846117327994890/928483046250905630/unknown.png" alt = " " />
						<img className = "weeklyCalendarPhoto" src= "https://cdn.discordapp.com/attachments/925846117327994890/928482846484598804/unknown.png" alt = " "/>
						<img className = "calendarPhoto" src="https://cdn.discordapp.com/attachments/925846117327994890/928482948536213594/unknown.png" alt = " "/>
						<img className = "loginPhoto" src="https://cdn.discordapp.com/attachments/925846117327994890/928482776523632700/unknown.png" alt="SchoolDule"/>
					</div>

				</div>
				

				<SignUp />
			</div>
		);
	}
}

export default Login;
