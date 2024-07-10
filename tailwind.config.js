/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Josefin: "'Josefin sans' , sans-serif",
        poppins: "'poppins' , sans-serif",
        mont: "'Montserrat' , sans-serif",
      },
      backgroundImage: {
        "gradient-tb":
          "linear-gradient(to bottom, #815CC8 29.44%, #1BABFE 81.54%)",
        // "gradient-lr": "linear-gradient(to right, #815CC8, #1BABFE)",
        "grident-rl": "linear-gradient(90deg, #815CC8 0%, #1BABFE 100%)",

        "gradient-token-box":
          "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(196, 196, 196, 0) 100%, rgba(255, 255, 255, 0.03) 100%)",
        "grident-footer-IconBox":
          "linear-gradient(110.75deg, rgba(255, 255, 255, 0.1) 0.01%, rgba(255, 255, 255, 0.03) 99.99%)",
      },
      backgroundSize: {
        full: "100% 100%",
      },
      borderImage: {
        gradient: "linear-gradient(90deg, #815CC8 0%, #1BABFE 100%)",
      },
      borderWidth: {
        5: "5px",
      },

      boxShadow: {
        "shadow-btn": "0px 8px 30px 0px rgba(27, 171, 254, 0.5)",
      },
    },
  },
  plugins: [],
};
