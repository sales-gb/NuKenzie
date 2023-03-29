import LogoBlack from '../../assets/logo-NuKenzie-black.svg';
import Button from '../Button';
import './style.css';

const Header = ({ children }) => {
  return (
    <header className="main-header">
      <div className="header-container">
        <div className="logo">
          <img src={LogoBlack} alt="Logo" />
        </div>

        {children}
      </div>
    </header>
  );
};

export default Header;
