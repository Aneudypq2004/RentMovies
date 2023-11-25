/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        'azure-radiance': {
          '50': 'oklch(97.69% 0.02 222.68)',
          '100': 'oklch(94.35% 0.03 231.19)',
          '200': 'oklch(90.56% 0.06 229.25)',
          '300': 'oklch(85.35% 0.10 226.60)',
          '400': 'oklch(78.55% 0.13 232.47)',
          '500': 'oklch(70.87% 0.16 244.44)',
          '600': 'oklch(62.81% 0.20 254.79)',
          '700': 'oklch(57.40% 0.20 257.15)',
          '800': 'oklch(49.11% 0.17 257.73)',
          '900': 'oklch(43.15% 0.13 255.56)',
          '950': 'oklch(31.38% 0.08 256.06)',
      },
  
      'main': '#1E2022',
      'second': '#121415'    
      }    
    },
    },

  
  
  plugins: [],
}

