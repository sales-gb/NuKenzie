import { useState } from 'react';
import Button from './components/Button';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import './styles/main.css';

const App = () => {
  const [page, setPage] = useState('Home');

  return (
    <main className="main-home">
      {page == 'Home' ? (
        <Home>
          <Button onClick={() => setPage('Dashboard')} text="Iniciar" />
        </Home>
      ) : (
        <Dashboard>
          <Header>
            <Button onClick={() => setPage('Home')} text="Início" />
          </Header>
        </Dashboard>
      )}
    </main>
  );
};

export default App;
