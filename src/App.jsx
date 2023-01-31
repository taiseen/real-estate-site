import { Routes, Route } from 'react-router-dom';
import { Footer, Header } from './components';
import PropertyDetails from './pages/PropertyDetails';
import Home from './pages/Home';

const App = () => {

  return (
    <main className='max-w-[1440px] mx-auto bg-white'>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/property/:id' element={<PropertyDetails />} />
      </Routes>

      <Footer />
    </main>
  )
}

export default App