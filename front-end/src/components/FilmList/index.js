import React from 'react';
import Button from '../Button';

function FilmList({ data }) {
	function onClick(filmTitle) {
		//this click will the send the film to our DB
        //DO POST
        console.log(filmTitle);
        //Get film title
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
