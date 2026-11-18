export default {
	plugins: {
		"postcss-nesting": {},
		"@csstools/postcss-media-minmax": {},
		"@csstools/postcss-trigonometric-functions": {},
		"@csstools/postcss-stepped-value-functions": {},
		"postcss-combine-duplicated-selectors": {},
		"cssnano": {
			preset: ["default", {
				calc: false
			}]
		}
	}
}