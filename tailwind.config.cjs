const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			padding: {
				'1/2': '50%',
				full: '100%'
			}
		}
	},

	plugins: []
};

module.exports = config;
