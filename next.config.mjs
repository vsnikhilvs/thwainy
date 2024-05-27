/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/thwainy",
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
