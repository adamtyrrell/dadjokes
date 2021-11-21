import React, { useEffect, useState } from "react";
import './DisplayJoke.css';
import {ThumbUpIcon, ShareIcon} from '@heroicons/react/outline';

/**/

function DisplayJoke() {
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [joke, setJoke] = useState('');
    const [totalCount, setTotalCount] = useState('');
    const [jokeUrl, setJokeUrl] = useState('');
    let [jokeLikes, setJokeLikes] = useState(0);
    
    useEffect((e) => {
        setIsLoading(true);
        setHasError(false);
        const resp = async () => {await fetch('http://localhost:3000/dadjokes/')
        .then((res) => res.json())
        .then((data) =>
         setTotalCount(Object.keys(data).length)
        )
        
    };

        const newIndex = Math.floor(Math.random() * totalCount);
        

        const fetchJoke = async () => {
            try {
                await fetch(
                `http://localhost:3000/dadjokes/${newIndex}`
                )   
                .then((res) => res.json())
                .then((data) => {
                    setJoke(data);
                    setJokeUrl(`http://localhost:3000/dadjokes/${newIndex}`);
                    setJokeLikes(data.likes);
                })
            } catch (error) {
                setHasError (true);
            }
            setIsLoading(false); 
        };   
            fetchJoke(); 
            resp();
        }, [totalCount]);

        console.log(jokeLikes);

        function handleLikes(){
            let jokeLikes2 =jokeLikes;
            let upVote = ++ jokeLikes2;
            console.log(upVote);
            const xhr = new XMLHttpRequest();
            xhr.open("PUT", jokeUrl, true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify({
                id:joke.id,
                setup: joke.setup,
                punchline: joke.punchline,
                likes: upVote,
            }));
        }

    return (
        <React.Fragment>
            {hasError && <p>Whoops! Something went wrong!</p>}
            {isLoading ? (<svg className="loader m-10" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45"/>
            </svg>) : (<div><h2>{joke.setup}</h2><div className="mt-5 mb-5"><h3 className="italic">{joke.punchline}</h3></div>
            <div className="flex justify-evenly max-w-sm m-3"><button onClick={handleLikes}><ThumbUpIcon className="h-8 m-3 hover:cursor-pointer hover:animate-pulse"/></button><h5 className="m-3">Likes: {joke.likes}</h5><ShareIcon className="h-8 m-3 hover:cursor-pointer hover:animate-pulse"/></div></div>)}
        </React.Fragment>
    );
}


export default DisplayJoke;