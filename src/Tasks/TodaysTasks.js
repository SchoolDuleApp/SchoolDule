import { useState } from "react";
import CurrentTask from "./CurrentTask";
import UpcomingTasks from "./UpcomingTasks";

function TodaysTasks({ allTasks }) {
	// filter todays tasks
	// filter for current tasks
	const [currentTask, setCurrentTask] = useState({});
	return (
		<div>
			<CurrentTask currentTask={currentTask} />
			<UpcomingTasks allTasks={allTasks} />
		</div>
	);
}

export default TodaysTasks;
