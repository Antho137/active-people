/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  assetPrefix: "/active-people",
  basePath: "/active-people",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
