/** @type {import('tailwindcss').Config} */
import { THEMES } from "./src/constants";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
        },
      },
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
        },
      },
      ...THEMES.filter(t => !['light', 'dark'].includes(t)).map(theme => ({
        [theme]: {
          ...require(`daisyui/src/theming/themes`)[theme] || {},
        },
      })),
    ],
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
  },
}
