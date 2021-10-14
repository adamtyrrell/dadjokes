import React, { useEffect, useState } from "react";
import { newIndex } from "./App";
import './DisplayJoke.css';


function DisplayJoke() {
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [joke, setJoke] = useState('');
    useEffect((e) => {
    setIsLoading(true);
    const fetchJoke = async () => 
        await fetch(
        `http://localhost:3000/dadjokes/${newIndex}`
        )   
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setJoke(data);
            setIsLoading(false); 
            console.log(isLoading);
        });
    fetchJoke();  
    }, []);

    return (
        <React.Fragment>
            {isLoading ? (<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45"/>
            </svg>) : (<div><h2>{joke.setup}</h2><h3>{joke.punchline}</h3></div>)}
        </React.Fragment>

    );


}


export default DisplayJoke;