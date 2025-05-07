import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home'
import Collection from './pages/Collection';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Collection' element={<Collection />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
