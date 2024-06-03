import {NextFederationPlugin} from '@module-federation/nextjs-mf'

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config, {isServer}) => {
        config.plugins.push(
            new NextFederationPlugin({
                name: 'todo',
                filename: 'static/chunks/remoteEntry.js',
                remotes: {
                    root: `root@http://localhost:3000/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
                },
                exposes: {
                    './ToDoComponent': "./src/components/ToDo/ToDo.tsx"
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
