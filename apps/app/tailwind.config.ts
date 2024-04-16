import type { Config } from "tailwindcss";
import baseConfig from "@repo/tailwind-config";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/src/**/*.{ts,tsx}",
  ],
  theme: {
    colors: {
      primary: "#323334",
      neutral: {
        1: "#FCFCFC",
        7: "#646668",
        9: "#323334",
        10: "#191A1A",
      },
      overlaycolor: "#7D808266",
      green: {
        6: "#6DB24D",
        7: "#578F3D",
      },
      blue: {
        2: "#CCEAFF",
        7: "#0077CC",
      },
      white: "#FFFFFF",
      grey: {
        1: "#4B4D4E",
      },
      followButtonBackground:"#0095FF"
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        18: "4.5rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  presets: [baseConfig],
};
export default config;
