import { defineConfig } from "vite";

export default defineConfig({
    base: "/CyberDude-Challenges/",
    build: {
        target: "es2022"
    },
    esbuild: {
        supported: {
            "top-level-await": true,
        }
    }
})