const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://3.39.23.168:8080",
      changeOrigin: true,
    })
  );
};