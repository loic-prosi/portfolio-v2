import type { StorybookConfig } from "@storybook/nextjs";

import path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-themes",
    "@storybook/themes",
    "@storybook/addon-coverage",
    "@storybook/addon-a11y"
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {}
  },
  docs: {
    autodocs: "tag"
  },
  // Fix Next.js "@" imports not working in Storybook
  webpackFinal: async (config: any) => {
    config.resolve.alias["@"] = path.resolve(__dirname, "../src");
    config.resolve.alias["@/pages"] = path.resolve(__dirname, "../src/pages");
    config.resolve.alias["@/components"] = path.resolve(
      __dirname,
      "../src/components"
    );

    return config;
  }
};
export default config;
