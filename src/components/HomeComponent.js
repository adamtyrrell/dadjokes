import React from 'react';
import DisplayJoke from "./DisplayJoke";

function Home() {
    const joke = DisplayJoke(); 
    const generateJoke =  (e) => {
      window.location.reload();
    }
    return (
        <div>
        <center>
          
          <div className="card-text">{joke}</div>      
          <button onClick={generateJoke}>Generate Joke</button>
        </center>
      </div>
    )
}

export default Home;
