module.exports = {
	purge    : [ './src/**/*.{js,jsx,ts,tsx}', './public/index.html' ],
	darkMode : false, // or 'media' or 'class'
	theme    : {
		extend   : {
			backgroundImage : (theme) => ({
				image : "url('https://images.unsplash.com/photo-1562329265-95a6d7a83440?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=664&q=80')",
			}),
		},
		variants : {},
		plugins  : [],
	},
};
