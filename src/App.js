import logo from './logo.svg';
import './App.css';
import AppLayout from './component/AppLayout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RestaurantDetails from './component/RestaurantDetails/RestaurantDetails';
import About from './component/About/About';
import Help from './component/Help/Help';
import Cart from './component/Cart/Cart';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<AppLayout />} />
          <Route  path="/restaurant/:id" element= {<RestaurantDetails />}/>
          <Route  path="/about" element= {<About />}/>
          <Route  path="/help" element= {<Help />}/>
          <Route  path="/cart" element= {<Cart />}/>
        </Routes>
      </Router>


    </div>
  );
}

export default App;
