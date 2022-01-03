import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "../App.css";

function SignUp() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function validateForm() {
		return email.length > 0 && password.length > 0;
	}

	function handleSubmit(event) {
		event.preventDefault();
	}

	return (
		<div>
			<Button
				variant="primary"
				onClick={handleShow}
				style={{
					position: "absolute",
					width: "240px",
					height: "64px",
					left: "5%",
					top: "70%",
					color: "white",
					background: "#205F98",
					outline: "none",
				}}
			>
				Sign up
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Sign Up with your Email</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="Login">
						<Form onSubmit={handleSubmit}>
							<Form.Group size="lg" controlId="email">
								<Form.Label>Email</Form.Label>
								<Form.Control
									autoFocus
									type="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</Form.Group>
							<Form.Group size="lg" controlId="password">
								<Form.Label>Password</Form.Label>
								<Form.Control
									type="password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</Form.Group>
							<Button block size="lg" type="submit" disabled={!validateForm()}>
								Sign Up
							</Button>
						</Form>
					</div>
				</Modal.Body>
			</Modal>
		</div>
	);
}
export default SignUp;
