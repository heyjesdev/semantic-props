export default {
	plugins: {
		"postcss-import": {},
		"@csstools/postcss-media-minmax": {},
		"postcss-advanced-variables": {},
		"@csstools/postcss-trigonometric-functions": {},
		"@csstools/postcss-relative-color-syntax": {},
		"@csstools/postcss-oklab-function": {},
		"cssnano": {
			preset: ["default", {
				calc: false
			}]
		}
	}
}