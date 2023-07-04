import { Routes, Route } from 'react-router-dom';
import 'swiper/css'
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Explore from './pages/explore/Explore';
import Footer from './components/footer/Footer';
import Detail from './pages/Detail/Detail';
import SearchResult from './pages/SearchResult/SearchResult';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/explore/:mediaType' element={<Explore />} />
        <Route path='/:mediaType/:id' element={<Detail />} />
        <Route path='/search/:query' element={<SearchResult />} />
      </Routes>
      <Footer />
    </>
  )
}
