/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['bayut-production.s3.eu-central-1.amazonaws.com']
    },
    experimental: {
        optimizePackageImports: ["@chakra-ui/react"],
    }
};

export default nextConfig;
