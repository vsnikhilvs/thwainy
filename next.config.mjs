/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/nextjs-github-pages",
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
