/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate');

module.exports = {
  eslint: {
    dirs: ['src'],
  },

  reactStrictMode: true,
  trailingSlash: true,
  output: 'standalone',
  // Uncoment to add domain whitelist
  images: {
    domains: [],
  },

  // SVGR
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            icon: true,
          },
        },
      ],
    });

    return config;
  },

  ...nextTranslate(),
};
