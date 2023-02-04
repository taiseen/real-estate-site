import { getImageName } from '../utils/getImageName';
import { Search } from '.';
import images from '../assets';


const Banner = () => {

  return (
    <section className='h-full max-h-[640px] mb-6 xl:mb-20'>

      <div className='flex flex-col lg:flex-row'>

        <div className='flex-1 flex flex-col item-center lg:items-start justify-center 
          px-4 lg:px-0 lg:ml-8 xl:ml-[135px] text-center lg:text-left'>
          <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6'>
            <span className='text-violet-700'>Rent</span> your dream house with us...
          </h1>
          <p className='max-w-[480px] mb-8'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt voluptate nisi sequi a dolor repudiandae, eum unde nostrum tempora eius.</p>
        </div>


        <div className='hidden flex-1 lg:flex justify-end items-end'>
          <img src={images.houseBanner} alt={getImageName(images.houseBanner)} loading="lazy" />
        </div>

      </div>

      <Search />

    </section>
  );
};

export default Banner;
