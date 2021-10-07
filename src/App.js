import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import DisplayJoke from "./DisplayJoke";
import { Container } from 'reactstrap';
import NewJoke from './NewJoke';
import HeaderComponent from './HeaderComponent';

export let newIndex = Math.floor(Math.random() * 5);

function App() {
  const joke = DisplayJoke(); 
  const generateJoke =  (e) => {
    window.location.reload();
  }

  return (
    <div>
      <HeaderComponent />
      <center>
        <h1>The Dad Joke Generator</h1>
        <h2>{joke[0]}</h2>
        <h3>{joke[1]}</h3>       
        <button className="btn btn-primary" onClick={generateJoke}>Generate Joke</button>
      </center>
      <NewJoke />
    </div>

  );
}

export default App;
