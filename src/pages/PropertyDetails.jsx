import { BiBath, BiBed, BiArea } from 'react-icons/bi';
import { useParams, Link } from 'react-router-dom';
import { imageName } from '../utils/imageName';
import { housesData } from '../db/data';

const PropertyDetails = () => {

  const { id } = useParams();

  const property = housesData?.find(house => house.id === +id); // 🔎 find operation in database...

  return (
    <section>
      <div className='container mx-auto min-h-[800px] mb-14'>

        {/* 🏠 property info at heading */}
        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
          <div className='text-gray-700'>
            <h2 className='text-2xl font-semibold'>{property.name}</h2>
            <h2 className='text-lg mb-4'>{property.address}</h2>
          </div>

          <div className='mb-4 lg:mb-0 flex gap-x-4 text-sm md:mr-12'>
            <div className='bg-green-500 text-white px-3 py-1 rounded-full'>{property.type}</div>
            <div className='bg-violet-500 text-white px-3 py-1 rounded-full'>{property.country}</div>
          </div>

          <div className='text-3xl font-semibold text-violet-600 mb-2 lg:mb-0'>$ {property.price}</div>
        </div>

        {/* 🏠 property & 😎 agent related info */}
        <div className='flex flex-col items-start gap-8 lg:flex-row'>

          {/* 🏠 property info */}
          <div className='max-w-[768px]'>

            <div className='mb-8'>
              <img src={property.imageLg} alt={imageName(property.imageLg)} loading="lazy" />
            </div>

            <div className='flex gap-x-6 mb-6 text-violet-700'>
              <div className='flex items-center gap-x-2'>
                <BiBed className='text-2xl' /> <div>{property.bedrooms}</div>
              </div>

              <div className='flex items-center gap-x-2'>
                <BiBath className='text-2xl' /> <div>{property.bathrooms}</div>
              </div>

              <div className='flex items-center gap-x-2'>
                <BiArea className='text-2xl' /> <div>{property.surface}</div>
              </div>
            </div>

            <div className='text-justify text-lg text-gray-700'>{property.description}</div>
          </div>

          {/* 😎 agent info */}
          <div className='group flex-1 bg-white w-full mb-8 border border-gray-400 rounded-md px-6 py-8 hover:border-violet-700 duration-300'>

            <div className='flex items-center gap-x-4 mb-8'>

              <div className='w-20 h-20 p-1 border border-gray-400 rounded-full group-hover:border-violet-700 duration-300'>
                <img src={property.agent.image} alt={imageName(property.agent.image)} loading="lazy" />
              </div>

              <div className='font-bold text-lg'>
                <h2>{property.agent.name}</h2>
                <Link to="/" className='text-violet-700 text-sm border-b-[1px] border-transparent group-hover:border-violet-700 duration-500'>
                  View Listings
                </Link>
              </div>

            </div>

            {/* 😎 agent form for contact */}
            <form className='flex flex-col gap-y-4'>
              <input type="text" className='agent-contact-form-input' placeholder='Name' />
              <input type="text" className='agent-contact-form-input' placeholder='Email' />
              <input type="text" className='agent-contact-form-input' placeholder='Phone' />

              <textarea
                className='agent-contact-form-input resize-none h-36 py-2'
                placeholder='Message...'>
              </textarea>

              <div className='flex gap-x-2'>
                <button className='bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition'>Send Message</button>
                <button className='border-violet-700 text-violet-700 hover:border-violet-500 hover:text-violet-500 border rounded p-4 text-sm w-full transition'>Call</button>
              </div>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};

export default PropertyDetails;
