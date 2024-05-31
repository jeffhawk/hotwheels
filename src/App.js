import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home'
import CarList from './components/CarList/CarList';
import CarForm from './components/CarForm/CarForm';
import CarDetail from './components/CarDetail/CarDetail';
import NotFound from './components/NotFound/NotFoundPage';
import NavBar from './components/NavBar/NavBar'
import About from './components/About/About'
// import receitas from './Data/Receitas';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  const [cars, setCars] = useState([]);

  const addCar = (car) => {
    setCars([...cars, { ...car, id: cars.length + 1 }]);
  };

  const updateCar = (updatedCar) => {
    setCars(cars.map(car => (car.id === updatedCar.id ? updatedCar : car)));
  };

  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cars" element={<CarList cars={cars} />} />
          <Route path="/add-car" element={<CarForm onSubmit={addCar} />} />
          <Route path="/cars/:id" element={<CarDetail />} /> {/* car={cars.find(car => car.id === parseInt(car.id, 10))} />} />*/}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
    
  );
};

export default App;