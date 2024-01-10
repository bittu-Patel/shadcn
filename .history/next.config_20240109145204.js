/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'localhost',
                pathname: '**'
                port:              
                protocol: 'http',
            },
        ],
    },
}

module.exports = nextConfig
