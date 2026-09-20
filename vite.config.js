import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],

    base: "/architecture-and-clean-code-core-notes/",

    build: {
        sourcemap: false,
        target: "es2019",
    },

    css: {
        devSourcemap: false,
        modules: {
            scopeBehaviour: "global",
        },
    },
});
