/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "8xl": "88rem",
        "9xl": "94rem",
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "94rem",
      },
      colors: {
        "gray-1": "var(--gray-1)",
        "gray-2": "var(--gray-2)",
        "gray-3": "var(--gray-3)",
        "gray-4": "var(--gray-4)",
        "gray-5": "var(--gray-5)",
        "gray-6": "var(--gray-6)",
        "gray-7": "var(--gray-7)",
        "gray-8": "var(--gray-8)",
        "gray-9": "var(--gray-9)",
        "gray-10": "var(--gray-10)",
        "gray-11": "var(--gray-11)",
        "gray-12": "var(--gray-12)",
        "accent-1": "var(--accent-1)",
        "accent-2": "var(--accent-2)",
        "accent-3": "var(--accent-3)",
        "accent-4": "var(--accent-4)",
        "accent-5": "var(--accent-5)",
        "accent-6": "var(--accent-6)",
        "accent-7": "var(--accent-7)",
        "accent-8": "var(--accent-8)",
        "accent-9": "var(--accent-9)",
        "accent-10": "var(--accent-10)",
        "accent-11": "var(--accent-11)",
        "accent-12": "var(--accent-12)",
      },
    },
  },
  plugins: [],
};
