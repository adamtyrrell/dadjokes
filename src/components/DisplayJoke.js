import React, { useEffect, useState } from "react";
import './DisplayJoke.css';
import {ThumbUpIcon, ShareIcon} from '@heroicons/react/outline';

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
            {isLoading ? (<svg className="loader m-10" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45"/>
            </svg>) : (<div><h2>{joke.setup}</h2><div className="mt-5 mb-5"><h3 className="italic">{joke.punchline}</h3></div>
            <div className="flex justify-evenly max-w-sm m-3"><ThumbUpIcon className="h-8 m-3 hover:cursor-pointer hover:animate-pulse"/><h5 className="m-3">Likes: {joke.likes}</h5><ShareIcon className="h-8 m-3 hover:cursor-pointer hover:animate-pulse"/></div></div>)}
        </React.Fragment>
    );
}


export default DisplayJoke;