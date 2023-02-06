// import adapter from '@sveltejs/adapter-auto';
import netlify from '@sveltejs/adapter-netlify'; //<--- 추가


/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: netlify()
	},
};

export default config;
