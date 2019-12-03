const path = require('path');

/**
 * Determine the array of extensions that should be used to resolve modules.
 */
module.exports = {
  alias: {
    '@actions': path.resolve(__dirname, 'actions/'),
    '@utils': path.resolve(__dirname, 'utils/')
  },
  extensions: ['.js', '.json'],
  modules: [path.join(__dirname, 'src'), 'node_modules']
};
