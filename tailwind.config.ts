import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground-color)",
        primarycolor:"var(--primary-color)",
        secondarycolor:"var(--secondary-color)",
        headercolor:"var(--headerbg-color)",
        hovercolor:"var(--hover-color)",
        headingcolor:"var(--heading-color)",
        subheadingcolor:"var(--subheading-color)",
        textcolor:"var(--text-color)",
      },
    },
  },
  
  plugins: [],
} satisfies Config;
