import { useEffect, useState } from "react";
import './App.css';

function App() {


  const [joke, setJoke] = useState('');
  const [punchline, setPunchline] = useState('');
  const generateJoke = e => {
    window.location.reload(true);
  }
  useEffect(() => {
    const fetchJoke = async () =>
      await fetch(
        `https://dad-jokes.p.rapidapi.com/random/joke?rapidapi-key=7429be26efmsh5505ed8608ac5a9p1d7be2jsnd82c3d7312e9`
      )   
      .then((res) => res.json())
      .then((data) => {
        console.log(data.body.[0].setup);
        console.log(data.body.[0].punchline);
        setJoke(data.body.[0].setup);
        setPunchline(data.body.[0].punchline);
      });
    fetchJoke();   
  }, []);

  return (
    <div className="app">
      <center>
        <h1>The Dad Joke Generator</h1>
        <h2>{joke}</h2>
        <h3>{punchline}</h3>
        <button onClick={generateJoke}>Generate Joke</button>
      </center>
    </div>
  );
}

export default App;
