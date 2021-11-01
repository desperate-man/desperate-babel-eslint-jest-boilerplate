module.exports = {
  setupFilesAfterEnv: [require.resolve('./jest.setup.js')],
  transform: {
    '^.+\\.js$': require.resolve('./jest.transform.js'),
  },
  transformIgnorePatterns: ['/node_modules/'],
};
