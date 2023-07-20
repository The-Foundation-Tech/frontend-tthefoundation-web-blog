import Hero from "../../components/Hero";
import Program from "../../components/Program";
import Berita from "../../components/Berita";
import InfoGraf from "../../components/InfoGraf";
import Footer from "../../components/Footer";

export default function Homepage() {
	return (
		<>
			<Hero />
			<Program />
			<Berita />
			<InfoGraf />
			<Footer />
		</>
	);
}
