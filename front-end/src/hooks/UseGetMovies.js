import { useState} from "react";

async function useGetMovies(search) {
    const searchString = search.replace(" ", "%20");
    const [data, setData] = useState(null);

    while(data === null) {
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