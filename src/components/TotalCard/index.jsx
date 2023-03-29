import './style.css';

const TotalCard = ({ sumValue }) => {
  return (
    <div className="total-container">
      <div className="total-text">
        <p>Valor total:</p>

        <span>O valor se refere ao saldo</span>
      </div>

      <div className="total-value">
        <p className="value">$ {sumValue}</p>
      </div>
    </div>
  );
};

export default TotalCard;
