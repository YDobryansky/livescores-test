const withTM = require('next-transpile-modules')(['@mui/material', '@mui/system']); // pass the modules you would like to see transpiled

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API_KEY: '2d13739d1emshbd6890692783c2ap1cef47jsn88e0661fa47d',
    API_URL: 'https://api-football-v1.p.rapidapi.com/v3',
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    // TODO: Remove this domain after mock data removed
    domains: [
      'loremflickr.com',
      // TODO: Remove this domain when server implemented
      'www.flashscore.ua',
      // TODO: Replace with regex or other option
      'media.api-sports.io',
      'media-1.api-sports.io',
      'media-2.api-sports.io',
      'media-3.api-sports.io',
      'media-4.api-sports.io',
      'media-5.api-sports.io',
      'media-6.api-sports.io',
    ],
  },
};

module.exports = withTM(nextConfig);
