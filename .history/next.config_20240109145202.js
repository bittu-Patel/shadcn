/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'localhost',
                pathname: '**'
                po              
                protocol: 'http',
            },
        ],
    },
}

module.exports = nextConfig
