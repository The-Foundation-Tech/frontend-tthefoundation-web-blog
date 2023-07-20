import { Outlet } from "react-router-dom";

export default function AdminLayout() {
	return (
		<div>
			<h1>INI ADMIN LAYOUT</h1>
			<Outlet />
		</div>
	);
}
