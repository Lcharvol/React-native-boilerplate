module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        modules: "false",
      },
    ],
    "@babel/preset-react",
  ],
  plugins: [
    "react-hot-loader/babel",
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-transform-async-to-generator",
    "@babel/plugin-proposal-optional-chaining",
    [
      "@babel/plugin-proposal-class-properties",
      {
        loose: true,
      },
    ],
    [
      "@babel/plugin-transform-runtime",
      {
        regenerator: true,
        useESModules: true,
      },
    ],
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-transform-parameters",
    [
      "babel-plugin-root-import",
      {
        paths: [
          {
            rootPathSuffix: "./src",
            rootPathPrefix: "@/",
          },
          {
            rootPathSuffix: "./",
            rootPathPrefix: "~/",
          },
        ],
        compilerOptions: {
          baseUrl: ".",
          paths: {
            "@/*": ["src/*"],
            "^/*": ["public/*"],
          },
        },
      },
    ],
  ],
  env: {
    test: {
      presets: [
        [
          "@babel/preset-env",
          {
            modules: "commonjs",
          },
        ],
      ],
      plugins: [
        [
          "@babel/plugin-transform-runtime",
          {
            regenerator: true,
            useESModules: false,
          },
        ],
      ],
    },
    development: {
      plugins: ["babel-plugin-dynamic-import-node"],
    },
  },
};
