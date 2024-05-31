import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import carros from '../../Data/Carros';
import 'bootstrap/dist/css/bootstrap.min.css';

const CarList = ({ cars }) => {
  const [listaDeCarros, setListaDeCarros] = useState([...carros]);


  return (
    // <div className="container mt-5">
    //   <h2>Lista de Carros</h2>
    //   <ul>
    //     {listaDeCarros.map(
    //       (car) => (
    //       <li key={car.id}>
    //         <Link >{car.nome} - {car.marca}</Link>
    //         <button >Excluir</button>
    //       </li>
    //     ))}
    //   </ul>
    // </div>

    <div className="container mt-5">
      <h2>Lista de Carros</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Marca</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {listaDeCarros.map((car, idx) => (
            <tr key={idx}>
              <td>{car.id}</td>
              <td>{car.nome}</td>
              <td>{car.marca}</td>
              <td>
                <Link to={`/cars/${car.id}`} className="btn btn-primary btn-sm">Editar</Link>
                <button className="btn btn-danger btn-sm ml-2">Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CarList;

