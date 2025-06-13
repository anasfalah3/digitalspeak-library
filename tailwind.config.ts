import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // bgcolor: "#181818",
        primary: "#F36609",
        // maincards: "#0E0E0E",
        secondary: "#7A8400",
        divider: "#474747",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["forest", "dark"],
  },
};
export default config;
