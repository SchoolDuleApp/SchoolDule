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
			<div className="App">
				<div> 
					<h1  className = "Title">SchoolDule</h1>
				<div>
				<h2 className = "About" >
					Everything you need to manage your schedule.
				</h2>
				<h3 className = "AboutDescription">
					We get it, life can be hectic sometimes. Manage school, work, and breaks with SchoolDule. Whether it's to stay on top of things or just be more organized, SchoolDule has got you covered. 
				</h3>
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
				</div>
				</div>
				<img src="https://cdn.discordapp.com/attachments/925846117327994890/927311974633709628/unknown.png" alt="SchoolDule" className = "loginPhoto"/>
				<img src= "https://cdn.discordapp.com/attachments/925606377198608386/927426711958720642/unknown.png" alt = " " className = "smallerLoginPhoto"/>
				<img src= "https://cdn.discordapp.com/attachments/925606377198608386/927426759362748486/unknown.png" alt = " " className = "smallerLoginPhoto2"/>
				<img src="https://cdn.discordapp.com/attachments/925606377198608386/927426837871734814/unknown.png" alt = " " className = "smallerLoginPhoto3"/>
				<img src = { logo } alt = "logo" className = "logo" />
				
				<SignUp />
			</div>
		);
	}
}

export default Login;
