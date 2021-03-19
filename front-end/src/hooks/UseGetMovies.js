import { useState, useEffect } from 'react';

async function useGetMovies(search) {
    const searchString = search.replace(" ", "%20");
    const [data, setData] = useState(null);

    function getData(){
        const res = await fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${searchString}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": process.env.REACT_APP_X_RAPID_API_KEY,
                "x-rapidapi-host": process.env.REACT_APP_X_RAPID_API_HOST
            }
        }
        )
        const resData = await res.json();
        
        setData(resData)
        }

    return data;
}


  


export default useGetMovies;

// function PokemonViewer({ id }) {
//   // TODO: send http request to `https://pokeapi.co/api/v2/pokemon/${id}` and display the data!
//   // HINT: you will need useState and useEffect!

//   useEffect(() => {
//     async function getPokemon() {
//       let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
//       let data = await response.json();
//       console.log(data.id);
//       setPokedex(data.name);
//       console.log(data.name);
//       console.log(data.sprites.front_shiny);
//       setPokeImg(data.sprites.front_shiny);
//     }
//     getPokemon();
//   }, [id]);
