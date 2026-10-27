export default {
	plugins: {
		"@csstools/postcss-media-minmax": {},
		"@csstools/postcss-trigonometric-functions": {},
		"@csstools/postcss-relative-color-syntax": {},
		"@csstools/postcss-oklab-function": {},
		"postcss-combine-duplicated-selectors": {},
		"cssnano": {
			preset: ["default", {
				calc: false
			}]
		}
	}
}