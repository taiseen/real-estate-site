import { RiWallet3Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { useHouseContext } from '../context/HouseContext';
import { Menu } from '@headlessui/react';
import { useState } from 'react';

const DropdownPriceRange = () => {

  const { price, setPrice, priceRange } = useHouseContext();
  const [isOpen, setIsOpen] = useState(false);



  return (
    <Menu as='div' className='dropdown relative'>

      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className='dropdown-btn w-full text-left'
      >
        <RiWallet3Line className='dropdown-icon-primary' />

        <div>
          <div className='text-[15px] font-medium leading-tight'>{price}</div>
          <div className='text-[13px]'>Chose price range</div>
        </div>

        {
          isOpen
            ? <RiArrowUpSLine className='dropdown-icon-secondary' />
            : <RiArrowDownSLine className='dropdown-icon-secondary' />
        }

      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
        {
          priceRange.map((price, idx) => {

            return (
              <Menu.Item
                as='li'
                key={idx}
                onClick={() => setPrice(price.value)}
                className='dropdown-menu-item'
              >
                {price.value}
              </Menu.Item>
            )
          })
        }
      </Menu.Items>
    </Menu>
  );
};

export default DropdownPriceRange;
