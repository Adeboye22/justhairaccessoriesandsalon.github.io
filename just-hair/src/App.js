import {Routes, Route} from 'react-router-dom';
import './App.css';
import Data from './data/data.json'
import Navigation from './Components/Navigation';
import Homepage from './Components/Homepage';
import Review from './Components/Review';
import Product from './Components/Product';
import Service from './Components/Service';
import Base from './Components/Base';
import Checkout from './Components/Checkout';

function App() {
  const {products}  = Data;
  const {services} = Data;
  return (
    <>
    <div className="App">
      <Navigation />
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/Product" element={<Product products={products}/>} />
      <Route path="/Review" element={<Review />} />
      <Route path="/Service" element={<Service />} />
      <Route path="/Checkout" element={<Checkout />} />
      </Routes>
      <Base />
    </div>
    </>
  );
}

export default App;
