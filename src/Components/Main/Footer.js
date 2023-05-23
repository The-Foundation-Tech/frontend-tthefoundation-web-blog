import ymi from '../../img/ymi.png';

const Footer = () => {
  return (
    <footer className="bg-customBlue py-4 text-white">
      <div className="flex mx-10">
        <img src={ymi} className="w-24 bg-white rounded-md" />
        <div className="container ml-3 flex items-center justify-between">
          <p className="text-sm">Hak Cipta &copy; 2023 Yayasan Munashoroh Indonesia.</p>
          <ul className="flex-col">
            <li>
              <a href="#" className="text-sm">
                Tautan 1
              </a>
            </li>
            <li>
              <a href="#" className="text-sm">
                Tautan 2
              </a>
            </li>
            <li>
              <a href="#" className="text-sm">
                Tautan 3
              </a>
            </li>
          </ul>
          <ul className="flex-col">
            <li>
              <a href="#" className="text-sm">
                Tautan 1
              </a>
            </li>
            <li>
              <a href="#" className="text-sm">
                Tautan 2
              </a>
            </li>
            <li>
              <a href="#" className="text-sm">
                Tautan 3
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
