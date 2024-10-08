import type { ReactNode } from "react";

export type Func = () => void;

export interface ImageProps {
	/** src */
	src: string;
	/** width */
	width: string;
	/** height */
	height: string;
	radius?: string | number;
	error?: boolean | ReactNode;
	loading?: boolean | ReactNode;
	onLoad?: Func;
	onError?: Func;
	/** 其他属性 */
	[propName: string]: string | number | undefined | boolean | ReactNode | Func;
}

export const Image = ({
	src,
	width,
	height,
	radius,
	error = true,
	loading = true,
	onLoad,
	onError,
	...props
}: ImageProps) => {
	return (
		<>
			<div className="tmp-design-image" {...props}>
				Image
				<span>{src}</span>
				<br />
				<span>{width}</span>
				<br />
				<span>{height}</span>
				<br />
				<span>{radius}</span>
				<br />
				<span>{error}</span>
				<br />
				<span>{loading}</span>
				<br />
				<span onClick={onLoad}>onLoad</span>
				<br />
				<span onClick={onError}>onError</span>
			</div>
		</>
	);
};
