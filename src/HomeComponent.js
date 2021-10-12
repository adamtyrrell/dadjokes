import React from 'react'
import DisplayJoke from "./DisplayJoke";

function Home() {
    const joke = DisplayJoke(); 
    const generateJoke =  (e) => {
      window.location.reload();
    }
    return (
        <div>
        <center>
          <h1>The Dad Joke Generator</h1>
          <h2>{joke[0]}</h2>
          <h3>{joke[1]}</h3>       
          <button className="btn btn-primary" onClick={generateJoke}>Generate Joke</button>
        </center>
      </div>
    )
}

export default Home;
