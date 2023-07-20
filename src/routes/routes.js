import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../views/layouts/MainLayout";
import Homepage from "../views/pages/Homepage";
import About from "../views/pages/About";
import Contact from "../views/pages/Contact";
import Activities from "../views/pages/Activities";

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
			</Routes>
		</BrowserRouter>
	);
}
