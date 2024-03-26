/** @type {import('next').NextConfig} */


const nextConfig = {
    transpilePackages: ['@breeze/ui'],
    webpack: (config, {isServer}) => {
        config.plugins.push(new VeliteWebpackPlugin())
        return config
    },
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },
};

export default nextConfig;


class VeliteWebpackPlugin {
    static started = false

    apply(/** @type {import('webpack').Compiler} */ compiler) {
        // executed three times in nextjs
        // twice for the server (nodejs / edge runtime) and once for the client
        compiler.hooks.beforeCompile.tapPromise('VeliteWebpackPlugin', async () => {
            if (VeliteWebpackPlugin.started) return
            VeliteWebpackPlugin.started = true
            const dev = compiler.options.mode === 'development'
            const {build} = await import('velite')
            await build({watch: dev, clean: !dev})
        })
    }
}
