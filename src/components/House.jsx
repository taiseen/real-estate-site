import { BiBath, BiBed, BiArea } from 'react-icons/bi';
import { getImageName } from '../helper/getImageName';


const House = ({ house }) => {

  const { type, image, country, address, bedrooms, bathrooms, surface, price } = house;

  const propertyDetails = [
    { numbers: bedrooms, icons: BiBed },
    { numbers: bathrooms, icons: BiBath },
    { numbers: surface, icons: BiArea },
  ]

  return (
    <div className='w-full max-w-[352px] mx-auto cursor-pointer
    bg-white shadow-1 p-5 rounded-lg rounded-tl-[90px] hover:shadow-2xl transition duration-300'>

      <img src={image} alt={getImageName(image)} className='mb-5' loading="lazy" />

      <div className='mb-4 flex gap-x-2 text-sm justify-between'>
        <div className='bg-green-500 rounded-full px-3 py-1 text-white'>{type}</div>
        <div className='bg-violet-500 rounded-full px-3 py-1 text-white'>{country}</div>
      </div>

      <div className='text-lg font-semibold max-w-[260px]'>{address}</div>

      <div className='flex items-center justify-between my-3'>
        {
          propertyDetails.map((info, idx) => (
            <div className='flex items-center text-gray-600 gap-1' key={idx}>
              <div className='text-[20px]'>{<info.icons />}</div>
              <div>{info.numbers}</div>
            </div>
          ))
        }
      </div>

      <div className='text-lg font-semibold text-violet-600 mt-3 text-right'>${price}</div>

    </div>
  );
};

export default House;
