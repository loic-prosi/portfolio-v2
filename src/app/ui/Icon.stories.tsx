import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "@/app/ui/Icon";

const meta = {
  title: "Misc/Icon",
  component: Icon,
  tags: ["autodocs"]
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: "w-10",
    type: "github"
  },
  parameters: {
    layout: "centered"
  }
};
