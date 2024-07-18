// module.exports = {
//   apps : [{
//     script: 'node_modules/vite/bin/vite.js',
//     watch: "true",
//     args: 'serve --host',
//   }],
// };

// module.exports = {
//   apps: [
//     {
//       name: 'dev',
//       script: 'node_modules/vite/bin/vite.js',
//       watch: true,
//       args: 'serve --host',
//     },
//     {
//       name: 'prod',
//       script: 'serve',
//       args: ['-s', 'dist', '-l', '3000'],
//     },
//   ],
// };

module.exports = {
  apps: [
    {
      name: "dev",
      script: "node_modules/vite/bin/vite.js",
      watch: true,
      args: "serve --host",
    },
    {
      name: "prod",
      script: "serve",
      env: {
        PM2_SERVE_PATH: "./dist",
        PM2_SERVE_PORT: 5173,
        PM2_SERVE_SPA: "true",
        PM2_SERVE_HOMEPAGE: "/index.html",
      },
    },
  ],
};
