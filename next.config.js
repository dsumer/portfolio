const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],

  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'pbs.twimg.com' },
      { protocol: 'https', hostname: 'abs.twimg.com' },
    ],
  },

  async rewrites() {
    return [
      {
        source: '/_v_script.js',
        destination: 'https://cdn.vemetric.com/0.0.6/main.js',
      },
      {
        source: '/_v/:slug',
        destination: 'https://hub.vemetric.com/:slug',
      },
    ];
  },
};

module.exports = withContentlayer(nextConfig);
