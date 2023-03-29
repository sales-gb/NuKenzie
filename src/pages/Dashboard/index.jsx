import CardsList from '../../components/CardsList';
import Form from '../../components/Form';
import TotalCard from '../../components/TotalCard';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Dashboard = ({ children }) => {
  const [cards, setCards] = useState([]);

  const addCountCard = (card) => {
    const newCard = { ...card, id: uuidv4() };
    setCards([...cards, newCard]);
  };

  const sumValue = cards.reduce((total, atual) => {
    return atual.type == 'entrada'
      ? Number(atual.value) + Number(total)
      : Number(total) - Number(atual.value);
  }, 0);

  const removeCountCard = (cardId) => {
    const newCardsList = cards.filter((card) => card.id !== cardId);
    setCards(newCardsList);
  };

  return (
    <section className="section-dash">
      {children}
      <div className="dash-container container">
        <div>
          <Form sumValue={sumValue} addCountCard={addCountCard} />
          <TotalCard sumValue={sumValue} />
        </div>
        <CardsList cards={cards} removeCountCard={removeCountCard} />
      </div>
    </section>
  );
};

export default Dashboard;
