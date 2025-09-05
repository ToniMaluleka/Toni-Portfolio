import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/toni-portfolio/", // MUST match GitHub repo name
});
