import { useEffect, useState } from 'react';

function NumberOfJokes() {
    const [numberOfJokes, setNumberOfJokes] = useState(0);
    const count2 = numberOfJokes.length;
    useEffect((e) => {
        const fetchJokeCount = async () => {
            await fetch(
                'http://localhost:3000/dadjokes'
            )
            .then((res) => res.json())
            .then((data) => {
                setNumberOfJokes(Object.keys(data).map(Number));
            });
        }
        
        fetchJokeCount();
    }, []);
    

    return (
       count2
       
    );
}

export default NumberOfJokes