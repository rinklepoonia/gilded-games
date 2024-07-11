/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        skyblue: "#1BABFE",
        lightBlack: "#0000001A",
        lightGrey: "#B2B2B2",
        lightgrey: "#B6B6B7",
        BorderGrey: "#272728",
      },
      fontFamily: {
        Josefin: "'Josefin sans' , sans-serif",
        poppins: "'poppins' , sans-serif",
        mont: "'Montserrat' , sans-serif",
      },
      backgroundImage: {
        "gradient-tb":
          "linear-gradient(to bottom, #815CC8 29.44%, #1BABFE 81.54%)",
        "grident-rl": "linear-gradient(90deg, #815CC8 0%, #1BABFE 100%)",
        "gradient-token-box":
          "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(196, 196, 196, 0) 100%, rgba(255, 255, 255, 0.03) 100%)",
        "grident-footer-IconBox":
          "linear-gradient(110.75deg, rgba(255, 255, 255, 0.1) 0.01%, rgba(255, 255, 255, 0.03) 99.99%)",
      },

      container: {
        center: true,
        screens: {
          sm: "540px",
          md: "720px",
          lg: "1024px",
          xl: "1344px",
        },
      },
      backgroundSize: {
        full: "100% 100%",
      },
      boxShadow: {
        "shadow-btn": "0px 8px 30px 0px rgba(27, 171, 254, 0.5)",
        "shadaw-box": "0px 7px 30px 0px #1BABFE",
      },
    },
  },
  plugins: [],
};
