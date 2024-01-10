/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              hostname: 'localhost',
              pathname: '**',
              port: '3000',
              pt: 'http',
            },
        ],
    },
}

module.exports = nextConfig
