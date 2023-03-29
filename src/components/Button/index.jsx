import './style.css';

const Button = ({ text, onClick }) => {
  return (
    <button className="pink-btn" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
