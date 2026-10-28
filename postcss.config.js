export default {
	plugins: {
		"@csstools/postcss-trigonometric-functions": {},
		"postcss-combine-duplicated-selectors": {},
		"cssnano": {
			preset: ["default", {
				calc: false
			}]
		}
	}
}