/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "aromo-health.sgp1.cdn.digitaloceanspaces.com",
      },
    ],
  },
};

module.exports = nextConfig;
