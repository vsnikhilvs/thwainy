/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    trailingSlash: true,
    exportPathMap: function () {
        return {
            "/": { page: "/" },
            "/about": { page: "/about" },
            "/contact": { page: "/contact" },
            "/products": { page: "/products" },
        };
    },
};

module.exports = nextConfig;
