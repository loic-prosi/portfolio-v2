import type { Preview } from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-themes";
import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    backgrounds: {
      default: "White",
      values: [
        {
          name: "White",
          value: "#ffffff"
        },
        {
          name: "Black",
          value: "#000000"
        }
      ]
    }
  }
};

export const decorators = [
  withThemeByClassName({
    themes: {
      light: "light",
      dark: "dark"
    },
    defaultTheme: "light"
  })
];

export default preview;
