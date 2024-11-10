module.exports = {
    // Other configuration...
    module: {
      rules: [
        {
          test: /\.js$/,
          enforce: 'pre',
          use: ['source-map-loader'],
          exclude: /node_modules/  // Ignore node_modules
        },
      ],
    },
  };
  