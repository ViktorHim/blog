import type { Config } from "jest";

const config: Config = {
  clearMocks: true,
  preset: "ts-jest",
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.json",
        diagnostics: false,
      },
    ],
  },
  moduleFileExtensions: ["ts", "js", "json"],
  moduleDirectories: ["node_modules"],
  rootDir: "src",
  testMatch: ["<rootDir>/**/*.test.(ts|tsx)"],
};

export default config;
