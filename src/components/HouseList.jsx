import { useHouseContext } from '../context/HouseContext';
import { ImSpinner2 } from 'react-icons/im';
import { Link } from 'react-router-dom';
import { housesDB } from '../db/data';
import { House, Pagination } from '.';


const HouseList = () => {

  const { houses, loading, pageNumber } = useHouseContext();

  const displayPerPage = 6;
  const totalData = houses.length;
  const totalPaginationNumber = Math.ceil(totalData / displayPerPage);
  const start = pageNumber * displayPerPage - displayPerPage;
  const end = pageNumber * displayPerPage;


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
    <section className='pt-6 mb-10'>
      <div className="container mx-auto">

        {
          housesDB.length !== houses.length &&
          <p className='text-center text-lg lg:text-2xl text-gray-700 mb-6'>
            🔎 <span className='text-violet-700 font-semibold'>{houses.length}</span> result found...
          </p>
        }

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-12'>
          {
            houses.slice(start, end).map((house, idx) => (
              <Link to={`/property/${house.id}`} key={idx}>
                <House house={house} />
              </Link>
            ))
          }
        </div>

      </div>

      {
        totalData > displayPerPage &&
        <Pagination totalPaginationNumber={totalPaginationNumber} />
      }

    </section>
  );
};

export default HouseList;
