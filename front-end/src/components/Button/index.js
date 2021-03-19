import React from 'react';

const Button = ({ name, onClick }) => {
	return (
		<div>
			<button
				class='bg-green-600 rounded-lg border-4 border-green-800 p-2 inline-block font-serif  text-3xl tracking-wide transition delay-150 duration-300 ease-in-out'
				onClick={onClick}
			>
				{' '}
				{name}{' '}
			</button>
		</div>
	);
};

export default Button;
