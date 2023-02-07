import { getImageName } from '../helper/getImageName'
import { Link } from 'react-router-dom'


const RelatedSearch = ({ houses, id }) => {

    return (
        <section className='text-center mb-12'>

            <p className='text-xl lg:text-3xl text-gray-700 pb-8 underline underline-offset-4'>Similar Search Result</p>

            <div className='flex items-center justify-center gap-x-12 gap-y-14 w-full flex-wrap'>
                {
                    houses
                        .filter(house => house.id !== +id)
                        .map(house =>
                            <Link className='w-60 h-66' to={`/property/${house.id}`} key={house.id}>
                                <div className='w-full h-3/4 mb-2'>
                                    <img src={house.image} alt={getImageName(house.image)} className='w-full h-full' loading="lazy" />
                                </div>
                                <div className='my-2 flex gap-x-2 text-sm justify-between'>
                                    <div className='bg-green-500 rounded-full px-3 py-1 text-white'>{house.type}</div>
                                    <div className='bg-violet-500 rounded-full px-3 py-1 text-white'>{house.country}</div>
                                </div>
                                <div className='text-sm font-semibold'>{house.address}</div>
                            </Link>
                        )
                }
            </div>
        </section>
    )
}

export default RelatedSearch