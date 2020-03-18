module.exports = {
  devServer: {
    disableHostCheck: true,
    port: 80,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        ws: false,
        changeOrigin: false
      }
    }
  }
};
