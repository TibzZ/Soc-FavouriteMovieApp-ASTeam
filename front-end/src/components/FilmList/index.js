import React from 'react';
import Button from '../Button';

function FilmList({ data }) {
	function onClick(filmTitle) {
		console.log(JSON.stringify({ title: filmTitle }));
        fetch('https://localhost:5001/movies', {
            method: "POST",
            body: JSON.stringify({title: filmTitle}),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then(response => response.json())
            .then(json => console.log(json))
            .catch(err => console.log(err));
        console.log(filmTitle);
	}
	return (
		<ul>
			{data &&
				data.map((item, i) => (
					<li key={i}>
						{item.l} <Button name='add film' onClick={() => onClick(item.l)} />
					</li>
				))}
		</ul>
	);
}

export default FilmList;
