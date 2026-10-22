export default {
	plugins: {
		"postcss-combine-duplicated-selectors": {},
		"postcss-advanced-variables": {},
		"@csstools/postcss-trigonometric-functions": {},
		"cssnano": {
			preset: ["default", {
				calc: false
			}]
		}
	}
}