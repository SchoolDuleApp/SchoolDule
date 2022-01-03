import "./App.css";
import Main from "./Pages/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import Login from "./Pages/Login";

function App() {
	return (
		<BrowserRouter>
			<div>
				<Helmet>
					<title>Homework Tracker</title>
				</Helmet>

				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
