import * as webpack from 'webpack';
import * as path from 'path';

export default function(env: any = {}, args: any = {}): webpack.Configuration {
  const valor = env.valor
  const valorPago = env.valorPago
  
  return {

    entry: "./src/index.ts",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
      sourceMapFilename: "bundle.js.map"
    },
    devtool: 'eval-source-map',
    devServer: {
      contentBase: './dist',
      hot: false,
      historyApiFallback: true
    },
    resolve: {
      extensions: [
        '.js',
        '.ts',
        '.tsx'
      ]
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.js$/,
          use: [
            'source-map-loader'
          ],
          enforce: 'pre',
        },
        {
          test: /\.ts$/,
          use: ['ts-loader']
        }
      ]
    },
    plugins: [
      new webpack.NamedModulesPlugin(),
      new webpack.DefinePlugin({
        'process.env.VALOR': JSON.stringify(valor),
        'process.env.VALORPAGO': JSON.stringify(valorPago),
       })
    ]
  };  
}
