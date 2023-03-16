import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  verbose: true,
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  moduleDirectories: ["node_modules", "bower_components", "src"],
  moduleNameMapper: {
    "\\.(scss|css|jpg|png|gif)$": "<rootDir>/src/utils/test/file.mock.js",
  },
};

export default config;
