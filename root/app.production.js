const optimize = require('spike-optimize')
const Transform = require('@adamkiss/spike-frank/src/spike/transform')
const transformPhp = require('@adamkiss/spike-frank/src/spike/transform-php')
const transformIndex = require('@adamkiss/spike-frank/src/spike/transform-indexify')
const transformFixDoctype = require('@adamkiss/spike-frank/src/spike/transform-fix-doctype')
const transformHashCss = require('@adamkiss/spike-frank/src/spike/transform-hash-css')

module.exports = {
	afterSpikePlugins: [
		...optimize({scopeHoisting: true, minify: true}),
		new Transform([
			transformPhp, transformIndex, transformFixDoctype,
			transformHashCss.hashCss, transformHashCss.replaceCssHref
		])
	]
}
