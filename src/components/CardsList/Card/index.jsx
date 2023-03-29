import React from 'react';
import TrashIcon from '../../../assets/trash-icon.svg';

const Card = ({ card, removeCountCard }) => {
  return (
    <>
      {card.type == 'entrada' ? (
        <li className="enter">
          <div className="main-card-info">
            <h3>{card.title}</h3>

            <span>{card.type}</span>
          </div>

          <div className="value-card-info">
            <span>R$ {card.value}</span>

            <button onClick={() => removeCountCard(card.id)}>
              <img src={TrashIcon} alt="Excluir" />
            </button>
          </div>
        </li>
      ) : (
        <li className="exit">
          <div className="main-card-info">
            <h3>{card.title}</h3>

            <span>{card.type}</span>
          </div>

          <div className="value-card-info">
            <span>R$ {card.value}</span>

            <button onClick={() => removeCountCard(card.id)}>
              <img src={TrashIcon} alt="" />
            </button>
          </div>
        </li>
      )}
    </>
  );
};

export default Card;
