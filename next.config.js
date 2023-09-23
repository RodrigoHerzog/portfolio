const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: isProd ? '/portfolio' : undefined,
  assetPrefix: isProd
    ? 'https://rodrigoherzog.github.io/portfolio'
    : 'http://localhost:3000'
}
