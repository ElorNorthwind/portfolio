import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  base: "https://portfolio-dzhh8sm5o-elornorthwind.vercel.app/",
});

// https://portfolio-dzhh8sm5o-elornorthwind.vercel.app/
// https://elornorthwind.github.io/portfolio/
