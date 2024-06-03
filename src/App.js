import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Home from './components/Home/Home'
import CarList from './components/CarList/CarList';
import CarForm from './components/CarForm/CarForm';
import NotFound from './components/NotFound/NotFoundPage';
import NavBar from './components/NavBar/NavBar'
import About from './components/About/About'
// import Header from './components/Header/Header'
import arquivoCarros from './Data/Carros';
// import receitas from './Data/Receitas';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  const [carros, setCarros] = useState([]);
  const [carroParaEditar, setCarroParaEditar] = useState(null);
  // const [editandoCarro, setEditandoCarro] = useState(false);

  useEffect(() => {
    setCarros(arquivoCarros);
  },[]);

  // const adicionarCarro = (carro) => {
  //   setCarros([...carros, { ...carro, id: carros.length + 1 }]);
  // };

  // const atualizarCarro = (updatedCar) => {
  //   setCarros(carros.map(carro => (carro.id === updatedCar.id ? updatedCar : carro)));
  // };

  const handleAdicionaOuAtualizaCarro = (carro) => {
    if (carro.id) {
      setCarros(carros.map((c) => (c.id === carro.id ? carro : c)));
    } else {
      setCarros([...carros, { ...carro, id: carros.length + 1 }]);
    }
    setCarroParaEditar(null);
  };


  const handleEditCar = (carro) => {
    setCarroParaEditar(carro);
  };

  const handleDeleteCar = (id) => {
    setCarros(carros.filter((carro) => carro.id !== id));
  };

const handleLimpa = () => {
  setCarroParaEditar(null);

}

  return (
    <Router>
      <div>
        {/* <Header /> */}
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/carros" element={<CarList carros={carros} onEdit={handleEditCar} onDelete={handleDeleteCar} />} />
          <Route path="/add-carro" element={<CarForm onSubmit={handleAdicionaOuAtualizaCarro} carroParaEditar={carroParaEditar} onCancel={handleLimpa}/>
            // ) : (
              // <button onClick={handleShowForm}>Adicionar Novo Carro</button>
              // <CarForm onSubmit={handleAdicionaOuAtualizaCarro} carroParaEditar={carroParaEditar} onCancel={handleHideForm} />
            } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
    
  );
};

export default App;