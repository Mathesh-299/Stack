/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './pages/**/*.{html,js}',
//     './components/**/*.{html,js}',
//   ],
//   // ...
// }
  // /** @type {import('tailwindcss').Config} */
  // module.exports = {
  //   theme: {
  //     screens: {
  //       'sm': '640px',
  //       // => @media (min-width: 640px) { ... }

  //       'md': '768px',
  //       // => @media (min-width: 768px) { ... }

  //       'lg': '1024px',
  //       // => @media (min-width: 1024px) { ... }

  //       'xl': '1280px',
  //       // => @media (min-width: 1280px) { ... }

  //       '2xl': '1536px',
  //       // => @media (min-width: 1536px) { ... }
  //     }
  //   }
  // }


// import defaultTheme from "tailwindcss/defaultTheme";
// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       fontFamily: {
//         sans: ["Sora", ...defaultTheme.fontFamily.sans],
//         titleFont: ["Playfair", "serif"],
//       },
//       colors: {
//         whiteText: "#FFFFFF",
//         blackText: "#000000",
//         darkBg: "#151515",
//         lightDarkBg: "#1e1e1e",
//         redBg: "#b90807",
//         buttonBg: "#9B4D45",
//       },
//       backgroundImage: {
//         "banner-image": "url('/banner.png')",
//         "line-image": "url('/line.webp')",
//         "testimonial-image": "url('/testimonial.webp')",
//       },
//     },
//   },
//   plugins: [],
// };