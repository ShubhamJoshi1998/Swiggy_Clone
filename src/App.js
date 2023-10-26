import logo from './logo.svg';
import './App.css';
import AppLayout from './component/AppLayout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RestaurantDetails from './component/RestaurantDetails/RestaurantDetails';
import About from './component/About/About';
import Help from './component/Help/Help';
import Cart from './component/Cart/Cart';
import TermsConditions from './component/Terms&Conditions/Terms&conditions';
import Cookiepolicy from './component/cookiePolicy/cookiePolicy';
import Contact from './component/Contact/contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<AppLayout />} />
          <Route path="/restaurant/:id" element={<RestaurantDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/terms&Conditions" element={<TermsConditions />} />
          <Route path="/cookiepolicy" element={<Cookiepolicy />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>


    </div>
  );
}

export default App;
