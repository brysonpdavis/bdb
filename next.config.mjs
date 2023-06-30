/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs");
import bundleAnalyzer from '@next/bundle-analyzer'

const withBundleAnalyzer = bundleAnalyzer({enabled: process.env.ANALYZE === 'true'})

/** @type {import("next").NextConfig} */
const config = withBundleAnalyzer({
  reactStrictMode: true,
  experimental: {
    serverActions: true,
    appDir: true
  },
});

export default config;
