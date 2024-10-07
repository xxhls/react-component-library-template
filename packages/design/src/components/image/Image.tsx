import type React from "react";
import type { ReactNode } from "react";

export interface IImageProps {
	src: string;
	width: string;
	height: string;
	radius: string | number;
	error: boolean | ReactNode;
	loading: boolean | ReactNode;
	onLoad: () => void;
	onError: () => void;
}

export const Image: React.FC<Partial<IImageProps>> = (props) => {
	const {
		src,
		width,
		height,
		radius,
		error = true,
		loading = true,
		onLoad,
		onError,
	} = props;
	return (
		<>
			<div className="tmp-design--image">
				Image
				<span>{src}</span>
				<span>{width}</span>
				<span>{height}</span>
				<span>{radius}</span>
				<span>{error}</span>
				<span>{loading}</span>
				<span onClick={onLoad}>onLoad</span>
				<span onClick={onError}>onError</span>
			</div>
		</>
	);
};
