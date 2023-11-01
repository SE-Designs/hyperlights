// uno.config.ts
import presetUno from "@unocss/preset-uno";
import presetWebFonts from "@unocss/preset-web-fonts";
import { defineConfig } from "unocss";

export default defineConfig({
  shortcuts: {
    "font-main": "font-sans font-400",
    "font-main-bold": "font-sans font-700",
    "font-main-black": "font-sans font-900",
    "font-secondary": "font-mono font-400",
    "font-secondary-bold": "font-mono font-700",
    centerize: "absolute right-1/2 bottom-1/2 translate-y-1/2 translate-x-1/2",
  },
  presets: [
    presetUno(),
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: "Archivo:400,700,900",
        mono: ["Space Grotesk:400,700"],
      },
    }),
  ],
});
