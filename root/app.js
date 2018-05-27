const frank = require('@adamkiss/spike-frank')
const locals = {}

module.exports = frank({
	ignore: ['include/**', 'logs/**'],
	plugins: [],
	reshape: frank.reshape({
		root: __dirname,
		locals: ctx => Object.assign(locals, {
			page: frank.page(ctx)
		})
	}),
	server: {
		server: false,
		https: false,
		port: 2226,
		proxy: `http://REPLACETHIS`,
		notify: true
	}
})
