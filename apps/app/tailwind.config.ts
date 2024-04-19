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
        2: "#97999B",
        3: "#E5E6E6",
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
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  presets: [baseConfig],
};
export default config;
