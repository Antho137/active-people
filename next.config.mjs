/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? "/active-people/" : "",
  basePath: isProd ? "/active-people" : "",
  output: "export",
};

export default nextConfig;
