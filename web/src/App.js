import logo from './logo.svg';
import './App.css';
import Componente from './Componente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           SILVERIO PACHECO CHOQUE
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          aprender react
        </a>
        <Componente />
      </header>
    </div>
  );
}

export default App;
