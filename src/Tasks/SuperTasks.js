import { useState } from "react";
import Button from "react-bootstrap/Button";
import TodaysTasks from "./TodaysTasks";
import TaskPopUps from "./TaskPopUps";
import "../Styles/TaskPopUp.css"
import 'bootstrap/dist/css/bootstrap.min.css';
function SuperTasks() {
	// for reoccuring popup
	const [toggleTaskPopup, setToggleTaskPopup] = useState(false);
	const [taskType, setTaskType] = useState("");

	const toggleReoccuring = () => {
		setTaskType("reoccuring");
		setToggleTaskPopup(true);
	};

	const toggleQuick = () => {
		setTaskType("quick");
		setToggleTaskPopup(true);
	};

	const handleClose = () => {
		setToggleTaskPopup(false);
	};

	const [allTasks, setAllTasks] = useState([]);
	//const [todaysTasks, setTodaysTasks] = useState([]);

	return (
		<div className="tasks">
			<TodaysTasks allTasks={allTasks} />
			<Button className="btn-success" onClick={toggleReoccuring}>Add Reoccuring</Button>
			<Button onClick={toggleQuick}>Add Quick</Button>
			{toggleTaskPopup && (
				<TaskPopUps
					taskType={taskType}
					setTaskType={setTaskType}
					handleClose={handleClose}
					allTasks={allTasks}
					setAllTasks={setAllTasks}
				/>
			)}
		</div>
	);
}

// { *what we need for a task, and making sure we have all the info that must be displayed
//     subject: subject,
//     description: description,
//     date: date, //dateFixed, (strings)
//     time: time, //time.getHours() + ":" + time.getMinutes(), (strings)
//     id: Math.random() * 10000,
//     done: false,
//     current: false,
//     duration: duration,
// },

/* 

{ 
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
	

}


*/

export default SuperTasks;
