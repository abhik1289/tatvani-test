// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true, // Enables React's strict mode for identifying potential problems
//   experimental: {
//     appDir: true, // Enables the experimental App Directory feature
//   },
//   images: {
//     domains: ["via.placeholder.com"], // Allows loading images from specified domains
//   },
// };

// module.exports = nextConfig;
// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["via.placeholder.com"], // Allows loading images from specified domains
  },
}

module.exports = nextConfig