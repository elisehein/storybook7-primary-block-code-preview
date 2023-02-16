import { createStitches } from "@stitches/react";
import {
  blue,
  gray,
  green,
  mauve,
  orange,
  plum,
  purple,
  red,
  slate,
  yellow,
} from "@radix-ui/colors";

export const media = {
  small: "(min-width: 40em)",
  medium: "(min-width: 56em)",
  large: "(min-width: 64em)",
  xlarge: "(min-width: 80em)",
};

export const {
  styled,
  createTheme,
  css,
  globalCss,
  keyframes,
  theme,
  getCssText,
} =
  createStitches({
    theme: {
      colors: {
        ...gray,
        ...blue,
        ...red,
        ...green,
        ...mauve,
        ...purple,
        ...plum,
        ...slate,
        ...red,
        ...orange,
        ...yellow,

        primaryActionBackground: "$purple4",
        primaryActionSolidBackground: "$purple9",
        primaryActionSolidBackgroundHover: "$purple10",
        primaryActionSolidBackgroundActive: "$purple11",
        primaryActionSolidBackgroundDisabled: "$purple8",
        primaryActionSoft: "$purple1",
        primaryActionDisabled: "hsla(217.9, 76%, 14.7%, 0.04)",
        primaryActionDisabledText: "hsl(217.1, 13.2%, 68.8%)",
        primaryActionBorder: "$purple7",
        primaryActionBorderHover: "$purple8",
        primaryActionText: "$purple11",
        primaryActionHover: "$purple5",
        primaryActionActive: "$purple6",

        link: "$purple11",
        linkHover: "$purple12",

        borderSubtle: "$slate4",
        border: "$slate7",
        borderHover: "$slate8",

        // Tones refer to text color for that tone
        textDefault: "$slate12",
        critical: "$red10",
        caution: "$yellow10",
        positive: "$green10",
        neutral: "$slate11",
        info: "$blue10",
        promote: "$purple10",

        neutralBackground: "$slate1",
      },
      sizes: {
        xsmall: "400px",
        small: "660px",
        medium: "940px",
        large: "1280px",
        buttonSmall: "27px",
        buttonMedium: "37px",
        buttonLarge: "47px",
      },
      inputMaxWidths: {
        2: "7ch",
        3: "9ch",
        4: "11ch",
        5: "13ch",
        10: "25ch",
        20: "42ch",
      },
      space: {
        none: "0px",
        xxxsmall: "1px",
        xxsmall: "2px",
        xsmall: "5px",
        small: "10px",
        medium: "15px",
        large: "20px",
        xlarge: "25px",
        xxlarge: "35px",
        xxxlarge: "45px",
        xxxxlarge: "65px",
      },
      fontSizes: {
        1: "12px",
        2: "13px",
        3: "15px",
        4: "17px",
        5: "19px",
        6: "21px",
        7: "27px",
        8: "35px",
        9: "59px",
      },
      fontWeights: {
        regular: "400",
        medium: "500",
      },
      fonts: {
        sans: "Circular, -apple-system, system-ui, sans-serif",
        mono: "'Circular Mono', ui-monospace, monospace",
      },
      radii: {
        1: "4px",
        2: "6px",
        3: "8px",
        4: "12px",
        round: "50%",
        pill: "9999px",
      },

      shadows: {
        large:
          "rgba(60, 66, 87, 0.08) 0px 15px 35px 0px, rgba(0, 0, 0, 0.12) 0px 5px 15px 0px",
      },
    },
    media,
  });

export const sandboxTheme = createTheme("themeSandbox", {
  colors: {
    ...orange,

    primaryActionBackground: "$orange4",
    primaryActionSolidBackground: "$orange9",
    primaryActionSolidBackgroundHover: "$orange10",
    primaryActionSolidBackgroundActive: "$orange11",
    primaryActionSolidBackgroundDisabled: "$orange8",
    primaryActionSoft: "$orange1",
    primaryActionBorder: "$orange7",
    primaryActionBorderHover: "$orange8",
    primaryActionText: "$orange11",
    primaryActionHover: "$orange5",
    primaryActionActive: "$orange6",

    link: "$orange9",
    linkHover: "$orange11",
  },
});

export const marketingTheme = createTheme("themeMarketing", {
  colors: {
    promote: "hsl(240, 23%, 55%)",
    link: "hsl(12, 86%, 61%)",
    linkHover: "hsl(12, 86%, 50%)",
    textDefault: "hsl(220, 33%, 16%)",
    primaryActionBackground: "$orange4",
    primaryActionSolidBackground: "#F16846",
    primaryActionSolidBackgroundHover: "#F38164",
    primaryActionSolidBackgroundActive: "#DC5A3A",
    primaryActionSolidBackgroundDisabled: "$orange8",
    primaryActionSoft: "$orange1",
    primaryActionBorder: "$orange7",
    primaryActionBorderHover: "$orange8",
    primaryActionText: "#F16846",
    primaryActionHover: "$orange5",
    primaryActionActive: "$orange6",
  },
  fontWeights: {
    regular: "300",
    medium: "400",
    strong: "700",
  },
  fontSizes: {
    1: ".75rem",    // 12px
    2: ".875rem",   // 14px
    3: "1rem",      // 16px
    4: "1.125rem",  // 18px
    5: "1.375rem",  // 22px
    6: "1.75rem",   // 28px
    7: "2.1875rem", // 35px
    8: "2.75rem",   // 44px
    9: "3.4375rem", // 55px
  },
  space: {
    none: "0px",
    xxxsmall: "2px",
    xxsmall: "4px",
    xsmall: "8px",
    small: "12px",
    medium: "20px",
    large: "32px",
    xlarge: "48px",
    xxlarge: "64px",
    xxxlarge: "128px",
    xxxxlarge: "160px",
  },
  sizes: {
    buttonSmall: "35px",
    buttonMedium: "46px",
    buttonLarge: "62px",
  },
});

export const globalStyles = globalCss({
  "@font-face": [
    {
      fontFamily: "Circular",
      src: "url('/fonts/circular-regular.woff2') format('woff2')",
      fontStyle: "normal",
      fontWeight: "400",
      fontDisplay: "swap",
    },
    {
      fontFamily: "Circular",
      src: "url('/fonts/circular-medium.woff2') format('woff2')",
      fontStyle: "normal",
      fontWeight: "500",
      fontDisplay: "swap",
    },
    {
      fontFamily: "Circular Mono",
      src: "url('/fonts/circular-mono.woff2') format('woff2')",
      fontStyle: "normal",
      fontWeight: "400",
      fontDisplay: "swap",
    },
  ],
  body: {
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",

    "& *, & *::before, & *::after": {
      boxSizing: "border-box",
    },
    margin: "0",
    padding: "0",
    fontFamily: "Circular",
    color: "$textDefault",
  },
  select: {
    padding: "$medium",
    fontSize: "$medium",
    border: "none",
    boxSizing: "border-box",
    transition: "box-shadow .25s",
    borderRadius: "$1",

    "&:focus": {
      outline: 0,
      boxShadow: "0 0 0 1px hsl(222, 99%, 73%), 0 0 0 4px hsl(222, 99%, 78%)",
    },
  },
});
