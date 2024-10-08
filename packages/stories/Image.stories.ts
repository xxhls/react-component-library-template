import type { Meta, StoryObj } from "@storybook/react";

import "../design/index.css";
import { Image } from "../design/src/components/image/Image";

const meta = {
	title: "Example/Image",
	component: Image,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
	args: {
		src: "12333333",
		width: "200",
		height: "200",
	},
};
