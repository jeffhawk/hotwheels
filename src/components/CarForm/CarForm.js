// src/components/CarFormPage.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import carros from '../../Data/Carros'

const CarForm = ({ onSubmit, car }) => {
  const [formData, setFormData] = useState({
    nome: car ? car.name : '',
    model: car ? car.model : '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="container mt-5">
      <h2>{car ? 'Editar Carro' : 'Adicionar Carro'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            className="form-control"
            id="nome"
            name="nome"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="model">Modelo:</label>
          <input
            type="text"
            className="form-control"
            id="model"
            name="model"
            value={formData.model}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cor">Cor:</label>
          <input
            type="text"
            className="form-control"
            id="model"
            name="model"
            value={formData.cor}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="model">Modelo</label>
          <input
            type="text"
            className="form-control"
            id="model"
            name="model"
            value={formData.model}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">{car ? 'Atualizar' : 'Adicionar'}</button>
      </form>
    </div>
  );
};

export default CarForm;











// import React, { useEffect, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const CarForm = ({ onAddCar }) => {

//   useEffect(() => {
//     document.title = 'Adicionar - HotWheels CRUD';
//     }, []
//   );

//   const [brand, setBrand] = useState('');
//   const [model, setModel] = useState('');
//   const [year, setYear] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newCar = { brand, model, year };
//     onAddCar(newCar);
//     setBrand('');
//     setModel('');
//     setYear('');
//   };

  

//   return (
//     <div>
//       <h2>Adicionar Novo Carro</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Marca:
//           <input
//             type="text"
//             value={brand}
//             onChange={(e) => setBrand(e.target.value)}
//           />
//         </label>
//         <label>
//           Modelo:
//           <input
//             type="text"
//             value={model}
//             onChange={(e) => setModel(e.target.value)}
//           />
//         </label>
//         <label>
//           Ano:
//           <input
//             type="text"
//             value={year}
//             onChange={(e) => setYear(e.target.value)}
//           />
//         </label>
//         <button type="submit">Adicionar</button>
//       </form>
//     </div>
//   );
// };

// export default CarForm;
