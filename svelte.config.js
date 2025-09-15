import adapter from "@sveltejs/adapter-static";

const build = "../_builds/kyaruwo.dev";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: { runes: true },
	kit: {
		adapter: adapter({
			pages: build,
			assets: build,
			fallback: undefined,
			precompress: false,
			strict: true,
		}),
	},
};

export default config;
