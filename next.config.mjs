/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/projects/quantum-lab",
        destination: "https://quantum-lab-navy.vercel.app",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
