import * as Icons from "react-bootstrap-icons";

function CurrentTask() {
	return (
		<div className="CurrentTaskBubble">
			<div className="topleft">Current task:</div>
			<div className="Subject">
				<div>
					{" "}
					<Icons.Book /> Math 135{" "}
				</div>
			</div>
			<div className="AllocatedTime">
				<div>
					{" "}
					<Icons.Clock /> 1.5 hours to complete{" "}
				</div>
			</div>
			<div className="Description">
				<div>
					{" "}
					<Icons.Box /> Written Assignment 3 (due January 4){" "}
				</div>
			</div>
			<div className="StartTime">
				<div>
					{" "}
					<Icons.Clock /> Start time: 5:20 pm{" "}
				</div>
			</div>
			<div className="EndTime">
				<div>
					{" "}
					<Icons.Clock /> End time: 6:50 pm{" "}
				</div>
			</div>
		</div>
	);
}

export default CurrentTask;
