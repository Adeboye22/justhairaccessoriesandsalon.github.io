import {Routes, Route} from 'react-router-dom';
import styles from './App.css';
import Navigation from './Components/Navigation';
import Homepage from './Components/Homepage';
// import Review from './Components/Review';
// import Product from './Components/Product';
// import Service from './Components/Service';
import Base from './Components/Base';

function App() {
  return (
    <>
    <div className="App">
      <Navigation />
      <Routes>
      <Route path="/" element={<Homepage />} />
      {/* <Route path="/Product" element={<Product />} />
      <Route path="/Review" element={<Review />} />
      <Route path="/Service" element={<Service />} /> */}
      </Routes>
      <Base />
    </div>
    </>
  );
}

export default App;
