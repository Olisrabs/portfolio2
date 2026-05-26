import forms from '@tailwindcss/forms';
import containerQueries from '@tailwindcss/container-queries';

export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "on-error-container": "#ffdad6",
        "outline-variant": "#444748",
        "inverse-surface": "#e2e2e2",
        "on-tertiary-fixed-variant": "#3c4d00",
        "secondary-fixed-dim": "#e8b3ff",
        "surface-container-highest": "#333535",
        "on-secondary-fixed-variant": "#7200a3",
        "tertiary": "#abd600",
        "on-tertiary-fixed": "#161e00",
        "primary": "#c9c6c5",
        "tertiary-fixed": "#c3f400",
        "on-primary-fixed-variant": "#474646",
        "surface-container-low": "#1a1c1c",
        "outline": "#8e9192",
        "surface-dim": "#121414",
        "secondary": "#e8b3ff",
        "on-secondary-fixed": "#310049",
        "surface-tint": "#c9c6c5",
        "on-surface": "#e2e2e2",
        "on-primary-container": "#7b7979",
        "inverse-primary": "#5f5e5e",
        "surface": "#121414",
        "error": "#ffb4ab",
        "on-surface-variant": "#c4c7c7",
        "primary-fixed-dim": "#c9c6c5",
        "surface-container-lowest": "#0c0f0f",
        "on-primary-fixed": "#1c1b1b",
        "surface-container-high": "#282a2b",
        "on-tertiary-container": "#688400",
        "on-secondary": "#500074",
        "background": "#121414",
        "surface-bright": "#37393a",
        "primary-fixed": "#e5e2e1",
        "secondary-fixed": "#f6d9ff",
        "on-error": "#690005",
        "primary-container": "#0b0b0b",
        "on-tertiary": "#283500",
        "surface-variant": "#333535",
        "inverse-on-surface": "#2f3131",
        "tertiary-container": "#080d00",
        "tertiary-fixed-dim": "#abd600",
        "on-primary": "#313030",
        "surface-container": "#1e2020",
        "error-container": "#93000a",
        "on-secondary-container": "#f5d6ff",
        "secondary-container": "#9d03de",
        "on-background": "#e2e2e2"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "gutter": "32px",
        "container-max": "1440px",
        "margin-mobile": "24px",
        "margin-desktop": "80px",
        "unit": "8px"
      },
      fontFamily: {
        "body-lg": ["Inter", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "headline-lg": ["Sora", "sans-serif"],
        "display-xl-mobile": ["Sora", "sans-serif"],
        "label-caps": ["JetBrains Mono", "monospace"],
        "display-xl": ["Sora", "sans-serif"],
        "headline-lg-mobile": ["Sora", "sans-serif"]
      },
      fontSize: {
        "body-lg": ["20px", { "lineHeight": "32px", "letterSpacing": "0em", "fontWeight": "400" }],
        "body-md": ["16px", { "lineHeight": "24px", "letterSpacing": "0.01em", "fontWeight": "400" }],
        "headline-lg": ["64px", { "lineHeight": "68px", "letterSpacing": "-0.02em", "fontWeight": "700" }],
        "display-xl-mobile": ["56px", { "lineHeight": "52px", "letterSpacing": "-0.04em", "fontWeight": "800" }],
        "label-caps": ["12px", { "lineHeight": "16px", "letterSpacing": "0.2em", "fontWeight": "500" }],
        "display-xl": ["120px", { "lineHeight": "110px", "letterSpacing": "-0.04em", "fontWeight": "800" }],
        "headline-lg-mobile": ["32px", { "lineHeight": "36px", "letterSpacing": "-0.02em", "fontWeight": "700" }]
      }
    },
  },
  plugins: [forms, containerQueries],
};
