import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center h-24 max-w-[1000px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-customRed text-left">Munashoroh.</h1>
      <ul className="hidden md:flex">
        <li className="p-4">
          <Link to="/">Home</Link>
        </li>
        <li className="p-4">
          <Link to="/about">About</Link>
        </li>
        <li className="p-4">
          <Link to="/activities">Activities</Link>
        </li>
        <li className="p-4">
          <Link to="/contact">Contact</Link>
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
  );
};

export default Navbar;
