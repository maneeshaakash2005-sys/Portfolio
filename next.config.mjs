  import { ImageError } from 'next/dist/server/image-optimizer';

  /** @type {import('next').NextConfig} */
  const nextConfig = {
    reactStrictMode: true,
    output: "export",
    images: {
      unoptimized: true,
    },
  };

  export default nextConfig;
