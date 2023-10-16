import logo from './logo.svg';
import './App.css';
import AppLayout from './component/AppLayout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RestaurantDetails from './component/RestaurantDetails/RestaurantDetails';
import About from './component/About/About';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<AppLayout />} />
          <Route  path="/restaurant/:id" element= {<RestaurantDetails />}/>
          <Route  path="/about" element= {<About />}/>
        </Routes>
      </Router>


    </div>
  );
}

export default App;
