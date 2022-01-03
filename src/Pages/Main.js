import "../App.css";
import DashBar from "../MainComponents/DashBar";
import SideBar from "../MainComponents/SideBar";
import SuperTasks from "../Tasks/SuperTasks";

function Main() {
	return (
		<div id="page-wrap">
			<SideBar />
			<DashBar />
			<SuperTasks />
		</div>
	);
}

export default Main;
