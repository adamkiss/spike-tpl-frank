const frank = require('@adamkiss/spike-frank')
const WebpackCaddyProxy = require('@adamkiss/webpack-caddy-proxy')

const caddy = new WebpackCaddyProxy({port: 2224, caddyfile: 'Caddyfile'})
const locals = {}

module.exports = frank({
	ignore: ['include/**', 'logs/**'],
	plugins: [caddy],
	reshape: frank.reshape({
		locals: ctx => Object.assign(locals, {
			page: frank.page(ctx)
		})
	}),
	server: caddy.browserSyncProxy()
})
