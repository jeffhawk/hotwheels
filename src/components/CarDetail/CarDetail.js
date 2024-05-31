import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import EditCarForm from '../EditCarForm/EditCarForm';

const CarDetail = ({ car }) => {
  const [isEditing, setIsEditing] = useState(false);
  // const history = useHistory();

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = (updatedCar) => {
    // Implemente a lógica para salvar as alterações do carro
    console.log('Carro editado:', updatedCar);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleDelete = () => {
    // Implemente a lógica para excluir o carro
    console.log('Carro excluído:', car.id);
    // history.push('/cars'); // Redireciona para a lista de carros após excluir
  };

  if (!car) {
    return <div>Carro não encontrado</div>;
  }

  return (
    <div>
      {!isEditing ? (
        <div>
          <h2>{car.nome} - {car.marca} - {car.cor} ({car.year})</h2>
          <p><strong>Cor:</strong> {car.cor}</p>
          {/* <p><strong>Preço:</strong> R$ {car.price}</p> */}
          <button onClick={handleEdit}>Editar</button>
          <button onClick={handleDelete}>Excluir</button>
        </div>
      ) : (
        <EditCarForm carToEdit={car} onSaveCar={handleSave} onCancel={handleCancel} />
      )}
    </div>
  );
};

export default CarDetail;
