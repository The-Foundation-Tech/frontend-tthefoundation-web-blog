import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../views/layouts/MainLayout";
import AdminLayout from "../views/layouts/AdminLayout";
import Homepage from "../views/pages/Main/Homepage";
import About from "../views/pages/Main/About";
import Contact from "../views/pages/Main/Contact";
import Dashboard from "../views/pages/Admin/Dashboard";
import Activities from "../views/pages/Main/Activities";

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				{/* Halaman yang menggunakan main layout */}
				<Route path="/" element={<MainLayout />}>
					<Route path="/" element={<Homepage />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/activities" element={<Activities />} />
				</Route>

				{/* Halaman yang menggunakan admin layout (admin panel) */}
				<Route path="/admin" element={<AdminLayout />}>
					<Route path="/admin/dashboard" element={<Dashboard />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
