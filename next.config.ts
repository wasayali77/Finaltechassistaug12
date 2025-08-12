///** @type {import('next').NextConfig} */
//const nextConfig = {
  //basePath: '/tech',
 // assetPrefix: '/tech',
 // trailingSlash: false,
 // reactStrictMode: true,
  //eslint: {
  //  ignoreDuringBuilds: true, // ⬅️ Yeh line add ki hai
 // },
  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/tech/',
  //       permanent: false,
  //     },
  //     {
  //       source: '/tech',
  //       destination: '/tech/',
  //       permanent: false,
  //     },
  //   ];
  // },
//};

//module.exports = nextConfig;
//export default nextConfig;


import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
 // basePath: '/tech',
 // assetPrefix: '/tech',
  trailingSlash: false,
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // ⬅️ Yeh line add ki hai
  },
  // output: 'standalone',
};

export default nextConfig;
