import React, { useState, useEffect } from 'react';

const EditCarForm = ({ carToEdit, onSaveCar }) => {
  const [nome, setNome] = useState('');
  const [marca, setMarca] = useState('');
  const [cor, setCor] = useState('');
  const [ano, setAno] = useState('');

  useEffect(() => {
    if (carToEdit) {
      setNome(carToEdit.nome);
      setMarca(carToEdit.marca);
      setCor(carToEdit.cor);
      setAno(carToEdit.ano);
    }
  }, [carToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedCar = { id: carToEdit.id, nome, marca, cor, ano };
    onSaveCar(updatedCar);
  };

  return (
    <div>
      <h2>Editar Carro</h2>
      <form onSubmit={handleSubmit}>
      <label>
          Nome:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </label>
        <label>
          Marca:
          <input
            type="text"
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
          />
        </label>
        <label>
          Cor:
          <input
            type="text"
            value={cor}
            onChange={(e) => setCor(e.target.value)}
          />
        </label>
        <label>
          Ano:
          <input
            type="text"
            value={ano}
            onChange={(e) => setAno(e.target.value)}
          />
        </label>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default EditCarForm;
