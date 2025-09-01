/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    /** These run only in DEV (next dev). At build time they're ignored.
     *  For production, you can set NEXT_PUBLIC_API_URL to the live Go host.
     */
    return process.env.NODE_ENV === 'development'
      ? [
          {
            source: '/status',
            destination: 'http://localhost:8080/status',
          },
          {
            source: '/echo',
            destination: 'http://localhost:8080/echo',
          },
        ]
      : [];
  },
};

module.exports = nextConfig;