import { RiWallet3Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { useHouseContext } from '../context/HouseContext';
import { priceRange } from '../constants';
import { Menu } from '@headlessui/react';
import { useState } from 'react';


const DropdownPriceRange = () => {

  const { price, setPrice } = useHouseContext();
  const [isOpen, setIsOpen] = useState(false);

  const isSelect = price.includes('(any)');


  return (
    <Menu as='div' className='dropdown relative'>

      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className='dropdown-btn w-full text-left'
      >
        <RiWallet3Line className='dropdown-icon-primary' />

        <div>
          <div className={`text-[15px] font-medium leading-tight ${!isSelect && 'text-violet-700'}`}>{price}</div>
          {isSelect && <div className='text-[13px]'>Chose price range</div>}
        </div>

        {
          isOpen
            ? <RiArrowUpSLine className='dropdown-icon-secondary' />
            : <RiArrowDownSLine className='dropdown-icon-secondary' />
        }

      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
        {
          priceRange.map((price, idx) => (
            <Menu.Item
              as='li'
              key={idx}
              className='dropdown-menu-item'
              onClick={() => { setPrice(price.value), setIsOpen(!isOpen) }}
            >
              {price.value}
            </Menu.Item>
          ))
        }
      </Menu.Items>

    </Menu>
  );
};

export default DropdownPriceRange;
