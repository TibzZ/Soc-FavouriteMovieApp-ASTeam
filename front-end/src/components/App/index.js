import { useAuth0 } from '@auth0/auth0-react';
import React, { useState } from 'react';
import useGetMovies from '../../hooks/UseGetMovies';
import Button from '../Button';
import FilmList from '../FilmList';
import HomePage from '../HomePage';
import SearchInput from '../SearchInput';
import './App.css';

function App() {
	const [ search, setSearch ] = useState('');
	//const [data, setData] = useState("");
	const { user, isAuthenticated, isLoading } = useAuth0();

	const data = useGetMovies(search);

	console.log('from the App:');
	console.log(data);

	function onClick() {
		throw Error();
	}

	return (
		<div>
			{isAuthenticated && (
				<div className='App'>
					{' '}
					<Button name={'Add Movie'} onClick={onClick} />
					<Button name={'Save Movie'} onClick={onClick} />
					<SearchInput setValue={setSearch} />
					<FilmList data={data} />
				</div>
			)}

			<HomePage />
		</div>
	);
}

export default App;
