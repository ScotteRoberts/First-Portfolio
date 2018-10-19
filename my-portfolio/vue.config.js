// Reference: https://stackoverflow.com/questions/49067696/how-to-add-support-for-pdf-files-with-vue-cli-3#49067746
module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(pdf)(\?.*)?$/,
          use: [
            {
              loader: "url-loader",
              options: {
                name: "files/[name].[hash:8].[ext]"
              }
            }
          ]
        }
      ]
    }
  }
};
