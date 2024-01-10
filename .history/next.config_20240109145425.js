/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              hostname: 'localhost',
              pathname: '30000'
            },
        ],
    },
}

module.exports = nextConfig
