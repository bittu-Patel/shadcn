/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              hostname: 'localhost',
              pathname: '**',
              port: '3000',
              ptrotoco: 'http',
            },
        ],
    },
}

module.exports = nextConfig
