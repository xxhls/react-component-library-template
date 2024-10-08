/// <reference types="vitest" />
import { join, resolve } from "node:path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { peerDependencies } from "./package.json";

export default defineConfig({
	plugins: [react(), dts({ rollupTypes: true })],
	build: {
		target: "esnext",
		minify: false,
		lib: {
			entry: resolve(__dirname, join("packages", "design", "index.ts")),
			fileName: "index",
			formats: ["es"],
		},
		rollupOptions: {
			external: ["react/jsx-runtime", ...Object.keys(peerDependencies)],
		},
	},
	test: {
		environment: "jsdom",
		setupFiles: "./setup.ts",
		coverage: {
			all: false,
			enabled: true,
		},
		include: ["./packages/test/**/*.test.tsx"],
	},
});
