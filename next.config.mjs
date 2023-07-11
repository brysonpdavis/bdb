/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs");
import bundleAnalyzer from '@next/bundle-analyzer'
// import mdxConfig from '@next/mdx'

// const withMDX = mdxConfig({ options: {} })

const withBundleAnalyzer = bundleAnalyzer({ enabled: process.env.ANALYZE === 'true' })

/** @type {import("next").NextConfig} */
const nextConfigOptions = {
  reactStrictMode: true,
  experimental: {
    serverActions: true,
    appDir: true
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      type: 'asset/source'
    })

    return config
  }
}

/** @type {import("next").NextConfig} */
const config = withBundleAnalyzer(nextConfigOptions);

export default config;
