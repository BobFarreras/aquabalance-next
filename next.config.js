/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Activa l'exportació estàtica
    images: {
      unoptimized: true, // Necessari per a l'exportació estàtica
    },
   

  };
  module.exports = nextConfig;