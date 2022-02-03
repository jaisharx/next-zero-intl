const withTM = require('next-transpile-modules')(['next-zero-intl'])

/**
 * @type {import('next').NextConfig}
 */
module.exports = withTM({
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
})
