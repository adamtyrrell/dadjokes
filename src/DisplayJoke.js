import { useEffect, useState } from "react";
import { newIndex } from "./App";

function DisplayJoke() {

    const [joke, setJoke] = useState('');
    const [punchline, setPunchline] = useState('');
    useEffect((e) => {
    const fetchJoke = async () =>
        await fetch(
        `http://localhost:3000/dadjokes/${newIndex}`
        )   
        .then((res) => res.json())
        .then((data) => {
        console.log(data);
        setJoke(data.setup);
        setPunchline(data.punchline);
        });
    fetchJoke();   
    }, []);

    return (
        [joke, punchline]
    );


}


export default DisplayJoke;