// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)

const repoNameURIPrefix =
  process.env.NODE_ENV === 'production' ? '/mass-dph-data' : '';


module.exports = {
    generateBuildId: async () => 'current',
    assetPrefix: repoNameURIPrefix,
    env: {
      linkPrefix: repoNameURIPrefix,
    },
}