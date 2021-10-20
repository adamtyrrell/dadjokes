import React, {useState} from 'react';
import DisplayJoke from "./DisplayJoke";
import ReactCardFlip from 'react-card-flip';
import FrontCard from './FrontCard';

function Home() {
    const joke = DisplayJoke(); 
    const generateJoke =  (e) => {
      window.location.reload();
    }
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip= (e) => {
      e.preventDefault();
      setIsFlipped(prevState => ({isFlipped: !prevState.isFlipped}));

      setTimeout(function() {
        generateJoke();
      },500);
    }

    return (

          <center className="mt-16">
            <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical" flipSpeedBackToFront="1" flipSpeedFrontToBack="1">
              <div>
                <div className="card-text">{joke}</div>      
                  <button onClick={handleFlip}className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-2 px-4 border border-yellow-500 rounded">Generate Joke</button>
                </div>
              <div>
                <div className="card-text">{joke}</div>      
                <button onClick={handleFlip} className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-2 px-4 border border-yellow-500 rounded">Generate Joke</button>
              </div>
          </ReactCardFlip>
        </center>

    )
}

export default Home;
