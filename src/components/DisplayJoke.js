import React, { useEffect, useState } from "react";
import './DisplayJoke.css';

/**/
const newIndex = Math.floor(Math.random() * 10);

function DisplayJoke() {
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [joke, setJoke] = useState('');
    
    useEffect((e) => {
        setIsLoading(true);
        setHasError(false);
        const fetchJoke = async () => {
            try {
                await fetch(
                `http://localhost:3000/dadjokes/${newIndex}`
                )   
                .then((res) => res.json())
                .then((data) => {
                    setJoke(data);
                })
            } catch (error) {
                setHasError (true);
            }
            setIsLoading(false); 
        };   
            fetchJoke(); 
        }, []);

    return (
        <React.Fragment>
            {hasError && <p>Whoops! Something went wrong!</p>}
            {isLoading ? (<svg className="loader" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45"/>
            </svg>) : (<div><h2>{joke.setup}</h2><h3>{joke.punchline}</h3><h4>Likes: {joke.likes}</h4></div>)}
        </React.Fragment>
    );
}


export default DisplayJoke;