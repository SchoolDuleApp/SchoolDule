import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../Styles/TaskPopUp.css"
import "../App.css"
import TimePicker from 'react-bootstrap-time-picker';

function TaskPopUps({ taskType, setTaskType, handleClose, allTasks, setAllTasks }) {
	// keys for {TASK}
		/*
        // new Date(...)
        // in order ... : year, month, day, hour, minute, second, and millisecond 
    
        // note that js uses dates like 0 = Jan, 11 = Dec 
    
		\\ Course name
        subject: subject, 
		\\ Description
        description: description, 

		\\ Start date
        date: date,

		\\ Start time
        time: time,

		\\ based on unix time
        rankedTime: new Date(date.getFullYear(), date.getMonth(), date.getDate(), time.getHours(), time.getMinutes()),
        
		\\ done?
        done: false,

		\\ Icon
        icon: null 

		\\ replace this with /getcurrentasks
        current: false,

		\\ length of task
        duration: duration,

		\\ id "salt"
        id: `${time}${Math.random() * 10000}`,
    
        if (taskType != 'reoccuring'){

			\\ this is a string, day of repeat ition
            repetition: null,
			period: null,
            endDate: null,
        } else {
			\\ THIS IS WEEKLY ONLY
            repetition: repetition, // (multiselect dropdown menu input)
            endDate: endDate,
        }
        
    
    */
	const [subject, setSubject] = useState("");
	const [description, setDescription] = useState("");
	// const [date, setDate] = useState(new Date());
	const [date] = useState(new Date());
	const [time, setTime] = useState(new Date());

	// const [rankedTime, setRankedTime] = useState(0);
	// const [done, setDone] = useState(false);
	// const [icon, setIcon] = useState(null);
	// current state???/
	const [duration, setDuration] = useState("");
	// for reoccuring
	// const [repetition, setRepetition] = useState("");
	const [endDate, setEndDate] = useState("");

	function handleButtonSubmit(e) {
		e.preventDefault();
		let reg = new RegExp(/^([0-9]?[0-9]|[0-9]):[0-9][0-9]$/);
		if (taskType) {
			setSubject(document.getElementById("subjectReoc").value);
			setDescription(document.getElementById("descriptionReoc").value);
			setTime(document.getElementById("timeReoc").value);
			setDuration(document.getElementById("durationReoc").value);
			setEndDate(document.getElementById("taskdateReoc").value);
		} else {
			// set for quick
		}
		// this code below is not done, change with corresponding values from above if statements
		if (true) {
			//duration.match(reg)) {
			console.log(subject, date, time, duration);
			//const dateFixed = date.toDateString(); //"" + date.getDate() + date.getDay() + date.getFullYear();
			console.log(document.getElementById("subjectInput").value);
			console.log(time.getHours() + ":" + time.getMinutes());
			console.log(time.getTime());
			console.log(duration.match(reg) ? "yes" : "no");
			setAllTasks([
				...allTasks,
				{
					subject: subject,
					description: description,
					date: date, //dateFixed,
					time: time, //time.getHours() + ":" + time.getMinutes(),

					// ensures that ids do not collide
					id: `${time}${Math.random() * 10000}`,
					done: false,
					current: false,
					duration: duration,
				},
			]);
			handleClose();
			setDuration("");
			setSubject("");
		} else {
			alert("Invalid task name or duration. Please try again");
		}
	}

	function QuickTask() {
		return (
			<Modal className="popup" show={true} onHide={handleClose} >
				<Modal.Header className="popup-header">
					<Modal.Title>Add a Quick Task</Modal.Title>
				</Modal.Header>
				<Modal.Body className="popup-body">
				
					<form className="popup-body">
						<label>Subject</label>
						<input
							id="subjectQuick"
							type="text"
							placeholder="What is the subject"
							autocomplete="off"
						/>
						<label>Icon</label>
						<>*Icon*</>
						<br />
						<label>Description</label>
						<input
							id="descQuick"
							type="text"
							placeholder="Describe"
							autocomplete="off"
						/>
						<br />
						<label>Start Time</label>

						{/* CHANGE TO BOOTSTRAP */}
						{/* <DatePicker
							id="timeQuick"
							//selected={new Date()}
							// preset to current date???
							showTimeSelect
							showTimeSelectOnly
							timeIntervals={15}
							timeCaption="Time"
							dateFormat="h:mm aa"
						/> */}
						<label>Duration:</label>
						<input
							id="durationQuick"
							type="text"
							placeholder="hh:mm"
							required
						/>
						<br />
						<label>Task Date</label>
						{/* THIS ALSOO */}
						{/* <DatePicker
							minDate={new Date()}
							selected={date}
							onChange={(inputDate) => setDate(inputDate)}
						/> */}
					</form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleButtonSubmit}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		);
	}

	function ReoccuringTask() {
		return (
			<Modal className = "popup" show={true} onHide={handleClose}>
				<Modal.Header className="popup-head">
					{/* <Modal.Title>Add a Reoccuring Task</Modal.Title> */}
					<div className="popup-head">
						{taskType==="reoccuring" ? console.log("reoccuring") : console.log("quick")}
						<Button CausesValidation="False" onClick={setTaskType("reoccuring")} className={`popup-head-button ${taskType==="reoccuring" ? "current" : "test"}`} >Add Quick Task</Button>
						<Button CausesValidation="False" onClick={console.log("br1111uh")} className={`popup-head-button ${taskType==="quick" ? "current" : "test"}`} >Add Reoccuring Task</Button>
					</div>
				</Modal.Header>
				<Modal.Body className="popup-body-outline">
					<form className="popup-body">
						<label>Subject</label>
						<input
							id="subjectReoc"
							type="text"
							placeholder="What is the subject"
							autocomplete="off"
						/>
						<label>Start Time</label>
						<TimePicker  step={30} />
						<label>End Date</label>
						<DatePicker id="endReoc" minDate={new Date()} selected={endDate} />
						<label>Repetition Period</label>
						<>ADD DAYS</>
						<label>Description</label>
						<input
							id="descriptionReoc"
							type="text"
							placeholder="Describe"
							autocomplete="off"
						/>
						<label>Start Time</label>
						<DatePicker
							id="timeReoc"
							selected={time}
							showTimeSelect
							showTimeSelectOnly
							timeIntervals={15}
							timeCaption="Time"
							dateFormat="h:mm aa"
						/>
						<label>Duration</label>
						<input id="durationReoc" type="text" placeholder="hh:mm" required />
						<label>Task Date</label>
						<DatePicker
							id="taskdateReoc"
							minDate={new Date()}
							selected={date}
						/>
					</form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleButtonSubmit}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		);
	}
	return (
		<div className="popup-box">
			{taskType ? console.log("true.") : console.log("false")}
			{taskType==="reoccuring" ? <ReoccuringTask /> : <QuickTask />}
		</div>
	);
}

export default TaskPopUps;
