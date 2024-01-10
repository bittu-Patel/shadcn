/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: '**',
                pathNma: '**'

            }
        ]
    }
}

module.exports = nextConfig
