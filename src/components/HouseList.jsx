import { useHouseContext } from '../context/HouseContext';
import { ImSpinner2 } from 'react-icons/im';
import { Link } from 'react-router-dom';
import { House } from '.';

const HouseList = () => {

  const { houses, loading } = useHouseContext();


  if (loading) {
    return (
      <ImSpinner2 className='mx-auto animate-spin text-violet-700 text-4xl mt-[200px]' />
    );
  }

  if (houses.length < 1) {
    return (
      <div className='text-center text-3xl text-gray-400 mt-48'>Sorry, nothing found...</div>
    )
  }

  return (
    <section className='mb-20'>
      <div className="container mx-auto">

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-12'>
          {
            houses.map((house, idx) => (
              <Link to={`/property/${house.id}`} key={idx}>
                <House house={house} />
              </Link>
            ))
          }
        </div>

      </div>
    </section>
  );
};

export default HouseList;
