// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
	server: {
		host: "0.0.0.0",
		allowedHosts: [
			"576c5a80-4dbd-4ae3-a305-c62ee5f6bfa2-00-3st55ogq5z0bx.spock.replit.dev",
		],
	},
});
