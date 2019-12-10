const { PHASE_PRODUCTION_SERVER } =
  process.env.NODE_ENV === "development"
    ? {} // We're never in "production server" phase when in development mode
    : !process.env.NOW_REGION
    ? require("next/constants") // Get values from `next` package when building locally
    : require("next-server/constants"); // Get values from `next-server` package when building on now v2

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_PRODUCTION_SERVER) {
    // Config used to run in production.
    return {};
  }

  /* eslint-disable */
  const withCSS = require("@zeit/next-css");
  const withLess = require("@zeit/next-less");
  const lessToJS = require("less-vars-to-js");
  // const withOffline = require('next-offline')
  const withManifest = require("next-manifest");

  const fs = require("fs");
  const path = require("path");

  // Where your antd-custom.less file lives
  const themeVariables = lessToJS(
    fs.readFileSync(path.resolve(__dirname, "./styles/antd.less"), "utf8")
  );

  // fix: prevents error when .less files are required by node
  if (typeof require !== "undefined") {
    require.extensions[".less"] = file => {};
  }

  // ! PWA configurations
  const manifest = {
    output: "./static",
    name: "NextStore",
    icons: [
      {
        src: "/images/logo.png",
        sizes: "64x64",
        type: "image/png"
      },
      {
        src: "/images/logo2.png",
        sizes: "144x144",
        type: "image/png"
      }
    ]
  };

  // const nextConfig = {
  //   target: "serverless",
  //   // generateInDevMode: true,
  //   // transformManifest: manifest => ['/'].concat(manifest),
  //   workboxOpts: {
  //     swDest: "static/service-worker.js",
  //     runtimeCaching: [
  //       {
  //         urlPattern: /^https?.*/,
  //         handler: "networkFirst",
  //         options: {
  //           cacheName: "https-calls",
  //           networkTimeoutSeconds: 15,
  //           expiration: {
  //             maxEntries: 150,
  //             maxAgeSeconds: 7 * 24 * 60 * 60 // 1 week
  //           },
  //           cacheableResponse: {
  //             statuses: [0, 200]
  //           }
  //         }
  //       }
  //     ]
  //   }
  // };

  return withManifest(
    // withOffline(
    withCSS(
      withLess(
        {   
          lessLoaderOptions: {
            javascriptEnabled: true,
            modifyVars: themeVariables
          },
          manifest: {
            ...manifest
          }
          // ...nextConfig
        }
        // )
      )
    )
  );
};
