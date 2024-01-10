/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              hostname: 'localhost',
              path
            },
        ],
    },
}

module.exports = nextConfig
