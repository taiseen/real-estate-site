import { Link, useNavigate } from 'react-router-dom'

const PageNotFound = () => {

  const navigate = useNavigate();

  // auto navigate to the home page after 3 seconds...
  setTimeout(() => { navigate('/') }, 5000);

  return (
    <section className='container mx-auto h-[calc(100vh-230px)]'>

      <div className='flex flex-col justify-center items-center gap-y-8 h-full pb-28'>

        <p className='text-violet-700 font-semibold text-4xl'>404 - Page Not Found!</p>

        <Link to='/' className='text-gray-800 text-2xl hover:underline'>Back To Home</Link>

      </div>

    </section>
  )
}

export default PageNotFound