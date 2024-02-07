import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from "@/app/ui/Footer";

const meta = {
  title: "Layout/Footer",
  component: Footer,
  tags: ["autodocs"]
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Loïc Prosi - 2024",
    link: {
      name: "Code source",
      url: "/"
    }
  },
  parameters: {
    layout: "fullscreen"
  }
};
