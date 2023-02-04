import { useHouseContext } from '../context/HouseContext';
import { Link } from 'react-router-dom';
import { housesDB } from '../db/data';
import logo from '../assets/img/logo.svg';


const Header = () => {

  const { setHouses } = useHouseContext();

  // rest search result by when user click this link...
  const handleResetSearch = () => setHouses(housesDB);

  return (
    <header className='py-6 mb-12 border-b'>
      <div className='container mx-auto flex justify-between items-center'>

        <Link to='/' onClick={() => handleResetSearch()}>
          <img src={logo} alt="logo" />
        </Link>

        <div className='flex items-center gap-6'>
          <Link to='/' className='hover:text-violet-800 transition'>
            LogIn
          </Link>

          <Link to='/' className='hover:bg-violet-700 bg-violet-800 py-3 px-4 rounded-lg transition text-white'>
            SignUp
          </Link>
        </div>

      </div>
    </header>
  );
};

export default Header;
