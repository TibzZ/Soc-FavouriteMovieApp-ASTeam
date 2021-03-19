import React, { useState } from 'react';

function UserList() {
    const [ data, setData ] = useState(null);
	
    function getFilm() {

		fetch('https://localhost:5001/movies', {
			method  : 'POST',
			body    : JSON.stringify(data),
			headers : {
				'Access-Control-Allow-Origin': '*',
				'Content-type': 'application/json; charset=UTF-8',
			},
		})
			.then((response) => response.json())
			.then((json) => setData(json))
			.catch((err) => console.log(err));

		return data;
	}

	const films = getFilm();

	return (
		<ul>
			{films && films.map((film, i) => <li key={i}>{film.title}</li>)}
		</ul>
	);
}

export default UserList;
