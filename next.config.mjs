/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",

  images: {
    unoptimized: true,
  },
  basePath: '/Portfolio',
  assetPrefix: '/Portfolio',
};

export default nextConfig;
