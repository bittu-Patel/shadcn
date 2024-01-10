/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: '**',
                pathname: '**'
                port: '3000',

            }
        ]
    }
}

module.exports = nextConfig
