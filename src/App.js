import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';
import Main from './MainComponent';

export let newIndex = Math.floor(Math.random() * 5);

function App() {


  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>

  );
}

export default App;
