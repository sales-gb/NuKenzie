import NoCard from '../../assets/NoCard-ilustration.svg';
import Card from './Card';

import './style.css';

const CardsList = ({ cards, removeCountCard }) => {
  return (
    <div className="container-desc">
      <h2 className="title">Resumo financeiro</h2>

      <ul className="card-list">
        {cards.length > 0 ? (
          <>
            {cards.map((card, id) => {
              return (
                <Card key={id} card={card} removeCountCard={removeCountCard} />
              );
            })}
          </>
        ) : (
          <div className="no-card">
            <h3>Você ainda não possui nenhum lançamento</h3>
            <img src={NoCard} alt="" />
          </div>
        )}
      </ul>
    </div>
  );
};

export default CardsList;
