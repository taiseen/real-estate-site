import { DropdownPriceRange, DropdownProperty, DropdownCountry } from '.';
import { useHouseContext } from '../context/HouseContext';
import { RiSearch2Line } from 'react-icons/ri';

const Search = () => {

  const { handleSearchClick } = useHouseContext();

  return (
    <div className='px-[30px] py-6 max-w-[1170px] mx-auto 
    flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 
    relative lg:-top-4 lg:shadow-1 lg:bg-transparent lg:backdrop-blur rounded-lg bg-white'
    >
      <DropdownCountry />
      <DropdownProperty />
      <DropdownPriceRange />

      <button
        onClick={() => handleSearchClick()}
        className='bg-violet-700 hover:bg-violet-800 transition w-full lg:w-[162px] h-16 rounded-lg 
        flex justify-center items-center text-xl text-white'
      >
        <RiSearch2Line />
      </button>

    </div>
  );
};

export default Search;
