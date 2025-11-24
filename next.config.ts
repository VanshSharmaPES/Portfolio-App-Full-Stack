/** @type {import('next').NextConfig} */
const nextConfig = {
    // FIX: Disable the development indicators (Next.js logo/button) in the corner
    devIndicators: {
        buildActivity: false,
    },
    // The rest of your configuration goes here
    reactStrictMode: true,
};

module.exports = nextConfig;