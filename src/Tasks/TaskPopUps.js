import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function TaskPopUps({ taskType, handleClose, allTasks, setAllTasks }) {
	// keys for {TASK}
		/*
        // new Date(...)
        // in order ... : year, month, day, hour, minute, second, and millisecond 
    
        // note that js uses dates like 0 = Jan, 11 = Dec 
    
    
        subject: subject, 
        description: description, 
        date: date,
        time: time,
        rankedTime: new Date(date.getFullYear(), date.getMonth(), date.getDate(), time.getHours(), time.getMinutes()),
        
        done: false,
        icon: null 
        current: false,
        duration: duration,
        id: Math.random() * 10000,
    
        if (taskType != 'reoccuring'){
            repetition: null,
            endDate: null,
        } else {
            repetition: repetition, // (multiselect dropdown menu input)
            endDate: endDate,
        }
        
    
    */
	const [subject, setSubject] = useState("");
	const [description, setDescription] = useState("");
	const [date, setDate] = useState(new Date());
	const [time, setTime] = useState(new Date());
	const [rankedTime, setRankedTime] = useState(0);
	const [done, setDone] = useState(false);
	const [icon, setIcon] = useState(null);
	// current state???/
	const [duration, setDuration] = useState("");
	// for reoccuring
	const [repetition, setRepetition] = useState("");
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
					id: Math.random() * 10000,
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
			<Modal show={true} onHide={handleClose}>
				<Modal.Header>
					<Modal.Title>Add a Quick Task</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form>
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
			<Modal show={true} onHide={handleClose}>
				<Modal.Header>
					<Modal.Title>Add a Reoccuring Task</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form>
						<label>Subject</label>
						<input
							id="subjectReoc"
							type="text"
							placeholder="What is the subject"
							// value={subject}
							// onChange={(e) => setSubject(e.target.value)}
							autocomplete="off"
						/>
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
			{taskType ? <ReoccuringTask /> : <QuickTask />}
		</div>
	);
}

export default TaskPopUps;
