import { RiHome5Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { useHouseContext } from '../context/HouseContext';
import { Menu } from '@headlessui/react';
import { useState } from 'react';

const DropdownProperty = () => {

  const { property, setProperty, properties } = useHouseContext();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as='div' className='dropdown relative'>

      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className='dropdown-btn w-full text-left'
      >
        <RiHome5Line className='dropdown-icon-primary' />

        <div>
          <div className='text-[15px] font-medium leading-tight'>{property}</div>
          <div className='text-[13px]'>Select your place</div>
        </div>

        {
          isOpen
            ? <RiArrowUpSLine className='dropdown-icon-secondary' />
            : <RiArrowDownSLine className='dropdown-icon-secondary' />
        }

      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
        {
          properties.map((property, idx) => {

            return (
              <Menu.Item
                as='li'
                key={idx}
                onClick={() => setProperty(property)}
                className='dropdown-menu-item'
              >
                {property}
              </Menu.Item>
            )
          })
        }
      </Menu.Items>
    </Menu>
  );
};

export default DropdownProperty;
