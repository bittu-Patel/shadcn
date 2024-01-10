/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              hostname: 'localhost',
              pathname: '3000',
            },
        ],
    },
}

module.exports = nextConfig
