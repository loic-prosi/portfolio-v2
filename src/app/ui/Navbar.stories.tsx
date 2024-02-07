import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "@/app/ui/Navbar";

const meta = {
  title: "Layout/Navbar",
  component: Navbar,
  tags: ["autodocs"]
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    heading: "Loïc Prosi",
    links: [
      {
        name: "Accueil",
        url: "/"
      },
      {
        name: "Projets",
        url: "/"
      }
    ]
  },
  parameters: {
    layout: "fullscreen",
    design: {
      type: "figma",
      url: "https://www.figma.com/file/8aerouAz2hRJ0X1VkDJNoJ/portfolio?type=design&node-id=43-21&mode=design&t=h4Fjqyyq2yEIhbxg-0"
    }
  }
};
