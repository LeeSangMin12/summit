import { sveltekit } from '@sveltejs/kit/vite';
import path from "path";

const config = {
	resolve: {
		alias: {
			"@": path.resolve("src"),  //절대경로 지정
		},
	},
	plugins: [sveltekit()],
};

export default config;
