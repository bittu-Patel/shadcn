/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: '**',
                pathN: '**'

            }
        ]
    }
}

module.exports = nextConfig
