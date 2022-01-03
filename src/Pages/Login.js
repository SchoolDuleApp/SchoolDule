import "../App.css";
import react, { useState, button } from "react";
import React, { ReactDOM } from "react";
import { GoogleLogin } from "react-google-login";
import SignUp from "../MainComponents/SignUpPage";

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
				<h1 >Google Login Demo</h1>
				<div id="loginButton" className="loginButton">
					Sign in with Google
				</div>
				<SignUp />
			</div>
		);
	}
}

export default Login;
