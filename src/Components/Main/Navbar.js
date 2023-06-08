import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import logo from '../../img/logo.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const menus = ['Profil', 'Informasi', 'Galeri', 'Kontak'];
  return (
    <section>
      <div className="flex justify-between items-center h-20 max-w-[1200px] mx-auto mt-3 px-10 text-slate-800 bg-customGray shadow-lg rounded-md">
        <img src={logo} alt="logo" className="h-full object-contain flex-shrink-0 bg-customGray hover:shadow-md hover:scale-125 rounded-lg transition duration-500" />
        <ul className="hidden md:flex font-semibold">
          <li className='dropdown'>
            <Link className="block p-3 border rounded-md border-slate-800 m-2 hover:bg-slate-700 hover:text-customGray" to="/">
              Profil
            </Link>
          </li>
          <li>
            <Link className="block p-3 border rounded-md border-slate-800 m-2 hover:bg-slate-700 hover:text-customGray" to="/about">
              Informasi
            </Link>
          </li>
          <li>
            <Link className="block p-3 border rounded-md border-slate-800 m-2 hover:bg-slate-700 hover:text-customGray" to="/activities">
              Galeri
            </Link>
          </li>
          <li>
            <Link className="block p-3 border rounded-md border-slate-800 m-2 hover:bg-slate-700 hover:text-customGray" to="/contact">
              Kontak
            </Link>
          </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-customGray bg-customGray ease-in-out duration-500' : 'fixed left-[-100%]'}>
          <h1 className="w-full text-3xl font-bold text-customRed pt-3">Munashoroh.</h1>
          <ul className="uppercase p-4 text-customNavy">
            <li className="p-4 border-b border-gray-600">
              <Link to="/">Home</Link>
            </li>
            <li className="p-4 border-b border-gray-600">
              <Link to="/about">About</Link>
            </li>
            <li className="p-4 border-b border-gray-600">
              <Link to="/activities">Activities</Link>
            </li>
            <li className="p-4 border-b border-gray-600">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
