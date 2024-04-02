import type { Meta, StoryObj } from "@storybook/react";

import Light from "./Light";

const meta: Meta<typeof Light> = {
  component: Light,
  title: "Example/Light",
  tags: ["autodocs"],
  argTypes: {
    variant: {
        control: {type: 'radio'},
        options: ['green', 'yellow', 'red']
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

/**this is how it looks by default */ 
export const Base: Story = {
    args: {
        variant: "green"
    }
};

export const Yellow: Story = {
  args: {
    variant: "yellow",
  },
};

export const Red: Story = {
  args: {
    variant: "red",
  },
};

// Custom render, like if you want to build something specific right in the story
export const Grouped: Story = {
  render: () => (
    <div
      style={{
        background: 'gray',
        display: "flex",
        flexDirection: "column",
        gap: 10,
        border: "1px solid black",
        width: "max-content",
        padding: 10,
      }}
    >
      <Light variant="red" />
      <Light variant="yellow" />
      <Light variant="green" />
    </div>
  ),
};
