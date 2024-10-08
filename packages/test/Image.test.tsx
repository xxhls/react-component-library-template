import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import { Image } from "../design";

describe("Image", () => {
	it("should render a div", () => {
		const image = render(
			<Image role="image" src="1" width="hello" height="1" />,
		);
		const element = image.container.firstElementChild;
		expect(element?.className).toBe("tmp-design-image");
	});
});
