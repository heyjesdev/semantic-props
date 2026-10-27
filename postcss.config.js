export default {
	plugins: {
		"postcss-combine-duplicated-selectors": {},
		"cssnano": {
			preset: ["default", {
				calc: false
			}]
		}
	}
}