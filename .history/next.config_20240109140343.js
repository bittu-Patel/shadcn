/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: '**',
                pathNm: '**'

            }
        ]
    }
}

module.exports = nextConfig
