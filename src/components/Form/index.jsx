import './style.css';
import Button from '../../components/Button';
import { useState } from 'react';

const Form = ({ addCountCard, sumValue }) => {
  const [formData, setFormData] = useState({
    title: '',
    value: '',
    type: 'entrada',
  });

  const handleForm = (event) => {
    event.preventDefault();
    if (formData.title !== '' && formData.value !== '') {
      addCountCard(formData);
    } else {
      alert('Tente novamente preenchendo todos os campos');
    }

    setFormData({
      title: '',
      value: '',
      type: 'entrada',
    });
  };

  return (
    <div className="container-form container">
      <form onSubmit={handleForm}>
        <div className="description-box">
          <label htmlFor="description">Descrição</label>
          <input
            type="text"
            placeholder="Digite aqui sua descrição"
            value={formData.title}
            onChange={(event) =>
              setFormData({ ...formData, title: event.target.value })
            }
          />
          <span>Ex: Compra de roupas</span>
        </div>
        <div className="value-box">
          <div className="value-info">
            <label htmlFor="value">Valor</label>

            <input
              type="number"
              placeholder="R$ 10"
              value={formData.value}
              onChange={(event) =>
                setFormData({ ...formData, value: event.target.value })
              }
            />
          </div>

          <div className="type-info">
            <label htmlFor="type">Tipo de valor</label>
            <select
              value={formData.type}
              onChange={(event) =>
                setFormData({ ...formData, type: event.target.value })
              }
            >
              <option value="entrada">Entrada</option>
              <option value="saida">Saída</option>
            </select>
          </div>
        </div>
        <Button type="Submit" text="Inserir valor" />
      </form>
    </div>
  );
};

export default Form;
