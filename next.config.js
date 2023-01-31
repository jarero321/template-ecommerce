/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    PROJECT_KEY: process.env.PROJECT_KEY,
    CLIENT_ID: process.env.CLIENT_ID,
    SECRET: process.env.SECRET,
    API_URL: process.env.API_URL,
    AUTH_URL: process.env.AUTH_URL,
    ENCODED_BASIC_AUTH: process.env.ENCODED_BASIC_AUTH
  },
  images: {
    domains: ['s3-eu-west-1.amazonaws.com'],
  },
  fontLoaders: [
    { loader: "@next/font/google", options: { subsets: ["latin"] } },
  ],
}

module.exports = nextConfig
