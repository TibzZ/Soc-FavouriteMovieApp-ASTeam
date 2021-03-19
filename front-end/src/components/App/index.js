import { useAuth0 } from '@auth0/auth0-react';
import React, { useState } from 'react';
import useGetMovies from '../../hooks/UseGetMovies';
import Button from '../Button';
import FilmList from '../FilmList';
import HomePage from '../HomePage';
import SearchInput from '../SearchInput';
import './App.css';
import UserList from "../UserList";

function App() {
	const [ search, setSearch ] = useState('');

	const { logout, isAuthenticated } = useAuth0();

	const data = useGetMovies(search);

	console.log('from the App:');
	console.log(data);

	return (
		<div>
			{isAuthenticated && (
				<div className='App'>
					{' '}
          <UserList/>
					<Button name="Log Out" onClick={logout}/>
					<SearchInput setValue={setSearch} />
					<FilmList data={data} />
				</div>
			)}
      {
        !isAuthenticated && (
          <HomePage />
        )
      }
		</div>
	);
}

export default App;
