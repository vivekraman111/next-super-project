/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputFileTracingIncludes: {
      "/*": ["./src/msg.txt"],
    },
  },
};

module.exports = nextConfig;
