import { Footer, Header, PageNotFound } from './components';
import { Routes, Route } from 'react-router-dom';
import { Home, PropertyDetails } from './pages';


const App = () => {

  return (
    <main className='max-w-[1440px] mx-auto bg-white/80'>

      <Header />

      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/property/:id' element={<PropertyDetails />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />

    </main>
  )
}

export default App;