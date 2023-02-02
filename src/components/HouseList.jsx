import { useHouseContext } from '../context/HouseContext';
import { ImSpinner2 } from 'react-icons/im';
import { Link } from 'react-router-dom';
import { House } from '.';

const HouseList = () => {

  const { houses, loading } = useHouseContext();

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
