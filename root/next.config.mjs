import {NextFederationPlugin} from '@module-federation/nextjs-mf'

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config, {isServer}) => {
        config.plugins.push(
            new NextFederationPlugin({
                name: 'root',
                filename: 'static/chunks/remoteEntry.js',
                remotes: {
                    todo: `todo@http://localhost:3001/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
                },
                extraOptions: {
                    exposePages: true,
                    automaticAsyncBoundary: true,
                },
            })
        )
        return config
    }
}

export default nextConfig
