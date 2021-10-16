import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';
import Main from './MainComponent';




function App() {

  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>

  );
}

export default App;
