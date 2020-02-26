module.exports = {
    entry: './myCode/app.ts',
    devtool: 'inline-source-map',
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
      filename: 'bundle.js'
    },
    devServer: {
      inline: false
    },
    module: {
      rules:[
        {test:/\.ts$/, exclude: /node_modules/,loader: 'ts-loader'}
      ]
    }
    
    
  };