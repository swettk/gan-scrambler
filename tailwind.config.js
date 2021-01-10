module.exports = {
  important: "#root",
  future: {},
  purge: [],
  theme: {
    screens: {
      landscape: { raw: "(min-width: 600px) and (max-height: 600px)" },
      computer: { raw: "(min-width: 600px) and (min-height: 600px)" },
    },
    colors: {
      "on-primary": "hsl(0, 0%, 100%)", //for text color only
      primary: "hsl(231, 50%, 50%)",
      "primary-highlight": "hsl(231, 50%, 65%)",

      "on-secondary": "hsl(0, 0%, 100%)", //for text color only
      secondary: "hsl(4, 90%, 50%)",
      "secondary-highlight": "hsl(4, 90%, 65%)",

      "on-background": "hsla(0, 0%, 0%, 0.87)", //for text color only
      "icon-on-background": "hsla(0, 0%, 0%, 0.54)", //for text color only
      background: "hsl(0, 0%, 100%)",

      "on-surface": "hsla(0, 0%, 0%, 0.87)", //for text color only
      surface: "hsl(0, 0%, 100%)",

      "on-error": "hsl(0, 0%, 100%)", //for text color only
      error: "hsl(349, 85%, 40%)",
    },
    spacing: {
      0: 0,
      xxs: ".0625rem", //1px
      xs: ".125rem", //2px
      sm: ".25rem", //4px
      med: ".5rem", //8px
      lg: "1rem", //16px
      xl: "2rem", //32px
      "3": "3rem",
      "4": "4rem",
      "6": "6rem",
      "8": "8rem",
      "16": "16rem",
    },
    width: {
      auto: "auto",
      full: "100%",
      screen: "100vw",
      1: "1rem",
      2: "2rem",
      3: "3rem",
      4: "4rem",
      6: "6rem",
      8: "8rem",
      10: "10rem",
      12: "12rem",
      14: "14rem",
      16: "16rem",
      20: "20rem",
      24: "24rem",
      "1/10": "10%",
      "2/10": "20%",
      "3/10": "30%",
      "4/10": "40%",
      "5/10": "50%",
      "6/10": "60%",
      "7/10": "70%",
      "8/10": "80%",
      "9/10": "90%",

      "1/4": "25%",
      "3/4": "75",

      "1/3": "33.333333%",
      "2/3": "66.666666%",
    },
    height: {
      auto: "auto",
      full: "100%",
      screen: "100vh",
      1: "1rem",
      2: "2rem",
      3: "3rem",
      4: "4rem",
      6: "6rem",
      8: "8rem",
      10: "10rem",
      12: "12rem",
      14: "14rem",
      16: "16rem",
      20: "20rem",
      24: "24rem",
    },
  },
  corePlugins: [
    "alignContent",
    "alignItems",
    "alignSelf",
    "backgroundColor",
    "borderColor",
    "borderRadius",
    "borderWidth",
    "boxShadow",
    "container",
    "cursor",
    "display",
    "flex",
    "flexDirection",
    "flexGrow",
    "flexShrink",
    "fontSize",
    "fontWeight",
    "height",
    "justifyContent",
    "justifyItems",
    "justifySelf",
    "lineHeight",
    "margin",
    "maxHeight",
    "maxWidth",
    "opacity",
    "overflow",
    "padding",
    "position",
    "textAlign",
    "textColor",
    "textOverflow",
    "verticalAlign",
    "visibility",
    "width",
    "zIndex",
  ],
  //TODO modify to use variant order and extend variants
  variants: {
    margin: ({ before }) => before(["children", "children-first", "DEFAULT"]),
    flex: ({ before }) => before(["children", "DEFAULT"]),
    width: ({ before }) => before(["children", "DEFAULT"]),
    cursor: ({ before }) => before(["children", "DEFAULT"]),
  },
  plugins: [require("tailwindcss-children")],
};
