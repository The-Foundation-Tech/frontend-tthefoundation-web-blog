import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";
import logo from "../../assets/img/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [prevScrollPos, setPrevScrollPos] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			// Periksa posisi scroll saat ini
			const currentScrollPos = window.pageYOffset;

			// Tentukan aturan untuk mengubah keadaan isScrolled
			if (currentScrollPos > prevScrollPos) {
				// Scroll ke bawah
				setIsScrolled(true);
			} else if (currentScrollPos === 0) {
				// Scroll ke atas
				setIsScrolled(false);
			}

			// Perbarui posisi scroll sebelumnya
			setPrevScrollPos(currentScrollPos);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [prevScrollPos]);

	const handleNav = () => {
		setNav(!nav);
	};

	return (
		<section>
			<nav
				className={
					!nav
						? ` fixed ${
								isScrolled ? " opacity-80" : " opacity-100"
						  }  duration-300 h-20 left-[50%] lg:max-w-[1200px] w-full -translate-x-[50%] mt-3 px-10 text-slate-800  bg-customGray border-2 border-inherit shadow-lg rounded-md z-10`
						: " fixed left-[40%] right-0 border-2 border-inherit duration-300 h-full bg-customGray z-10"
				}
			>
				<div
					className={
						!nav
							? "flex gap-4 items-center justify-between h-full"
							: "flex-col"
					}
				>
					<h1
						className={
							!nav
								? "hidden"
								: " text-red-500 font-semibold text-3xl mt-8"
						}
					>
						Munashoroh
					</h1>

					<img
						src={logo}
						alt="logo"
						className={
							!nav
								? "h-full  object-contain left-0 flex-shrink-0 bg-customGray hover:shadow-md cursor-pointer"
								: "hidden "
						}
					/>

					<div className={"h-20 mt-4"}>
						<ul
							className={
								!nav
									? "md:flex hidden font-semibold cursor-pointer  "
									: ""
							}
						>
							<NavLink
								to={"/"}
								className="block p-3 border rounded-md border-slate-800 m-2 hover:bg-slate-700 hover:text-customGray"
							>
								Profil
							</NavLink>

							<NavLink
								to={"/about"}
								className="block p-3 border rounded-md border-slate-800 m-2 hover:bg-slate-700 hover:text-customGray"
							>
								Informasi
							</NavLink>

							<NavLink
								to="/activities"
								className="block p-3 border rounded-md border-slate-800 m-2 hover:bg-slate-700 hover:text-customGray"
							>
								Galeri
							</NavLink>
							<NavLink
								to={"/contact"}
								className="block p-3 border rounded-md border-slate-800 m-2 hover:bg-slate-700 hover:text-customGray"
							>
								Kontak
							</NavLink>
						</ul>
					</div>
					<div
						onClick={handleNav}
						className={
							!nav
								? "block md:hidden "
								: "block md:hidden fixed top-3 right-3"
						}
					>
						{nav ? (
							<AiOutlineClose size={30} />
						) : (
							<AiOutlineMenu size={30} />
						)}
					</div>
				</div>
			</nav>

			<br></br>
		</section>
	);
};

export default Navbar;
