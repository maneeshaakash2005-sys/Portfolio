import { ImageError } from 'next/dist/server/image-optimizer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    formats: ["image/avif", "image/webp","image/png", "image/jpg"],
  },
};

export default nextConfig;
