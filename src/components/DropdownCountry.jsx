import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { useHouseContext } from '../context/HouseContext';
import { Menu } from '@headlessui/react';
import { useState } from 'react';


const DropdownCountry = () => {

  const { country, setCountry, countries } = useHouseContext();
  const [isOpen, setIsOpen] = useState(false);

  const isSelect = country.includes('(any)');


  return (
    <Menu as='div' className='dropdown relative'>

      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className='dropdown-btn w-full text-left'
      >
        <RiMapPinLine className='dropdown-icon-primary' />

        <div>
          <div className={`text-[15px] font-medium leading-tight ${!isSelect && 'text-violet-700'}`}>{country}</div>
          {isSelect && <div className='text-[13px]'>Select your place</div>}
        </div>

        {
          isOpen
            ? <RiArrowUpSLine className='dropdown-icon-secondary' />
            : <RiArrowDownSLine className='dropdown-icon-secondary' />
        }

      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
        {
          countries.map((country, idx) => (
            <Menu.Item
              as='li'
              key={idx}
              className='dropdown-menu-item'
              onClick={() => { setCountry(country), setIsOpen(!isOpen) }}
            >
              {country}
            </Menu.Item>
          ))
        }
      </Menu.Items>

    </Menu>
  );
};

export default DropdownCountry;
