module.exports = {
  webpack: {
    configure: {
      externals: {
        dockerode: 'commonjs dockerode'
      }
    }
  }
}
