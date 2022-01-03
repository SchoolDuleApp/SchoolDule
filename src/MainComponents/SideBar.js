import React from "react";
// import SidebarData from "./SideBarData";
// import SidebarLogo from "./SideBarData";
// import SidebarUser from "./SideBarData";

import { SidebarData, SidebarLogo, SidebarUser } from "./SideBarData";
function SideBar() {
	return (
		<div className="SideBar">
			<ul className="AppIcon">
				<li className="row"> {SidebarLogo.icon} </li>
			</ul>

			<ul className="SidebarList">
				{SidebarData.map((val, key) => {
					return (
						<li
							key={key}
							className="row"
							onClick={() => {
								window.location.pathname = val.link;
							}}
						>
							<div id="icon">{val.icon}</div>
						</li>
					);
				})}
			</ul>

			<ul className="UserIcon">
				<li className="row"> {SidebarUser.icon} </li>
			</ul>
		</div>
	);
}

export default SideBar;
