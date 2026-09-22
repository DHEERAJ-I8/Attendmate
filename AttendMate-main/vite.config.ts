import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
    tsConfigPaths({
      projects: ["./tsconfig.json"],
    }),
    tanstackStart(),
    // React's Vite plugin must come after the TanStack Start plugin.
    viteReact(),
    nitro(),
  ],
  // Build the server bundle from src/server.ts (our SSR error wrapper)
  // instead of the framework's default server entry.
  environments: {
    ssr: {
      build: {
        rollupOptions: {
          input: "./src/server.ts",
        },
      },
    },
  },
});
