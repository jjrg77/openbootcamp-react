import logo from './logo.svg';
import './App.css';
import Saludo from './components/pure/saludo';
import CompClase from './components/pure/compClase';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saludo></Saludo>
        <CompClase nombre='Joaquín' edad='44'></CompClase>
      </header>
    </div>
  );
}

export default App;
