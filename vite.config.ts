import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import viteTsConfigPaths from "vite-tsconfig-paths";

const ReactCompilerConfig = {
  target: "19",
};

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  const reactCompilerEnabled = env.VITE_REACT_COMPILE === "COMPILE";

  return {
    plugins: [
      react({
        babel: {
          plugins: reactCompilerEnabled
            ? [["babel-plugin-react-compiler", ReactCompilerConfig]]
            : undefined,
        },
      }),
      viteTsConfigPaths(),
    ],
    server: {
      port: 3000,
    },
    resolve: {
      alias: {
        "@": "/src",
      },
    },
    build: {
      outDir: "dist",
    },
  };
});
