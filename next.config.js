/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
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
