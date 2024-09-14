"use client";

import { type ReactNode, CSSProperties, useState } from "react";
import type {
	StylesConfig,
	CSSObjectWithLabel,
	Props as SelectProps
} from "react-select";
import ReactSelect from "react-select";

import { TBaseComponent } from "@types";

export type TOption = Omit<TBaseComponent<"option">, "label"> & {
	label: ReactNode;
};

interface ISelectProps extends SelectProps<TOption> {
	wrapperStyle?: CSSProperties;
	wrapperClassName?: string;
}

/** @public */
export const Select: React.FC<ISelectProps> = ({
	wrapperStyle,
	wrapperClassName,
	className,
	...props
}) => {
	const [mouseEntered, setMouseEntered] = useState(false);

	const valueStyles: (text?: string) => CSSObjectWithLabel = (text) => {
		const pseudo: CSSObjectWithLabel = {
			content: `"${text || ""}"`,

			position: "absolute",
			left: 0,
			top: 0,

			height: "100%",
			width: "100%",

			backgroundColor: "var(--theme-color)",

			transformOrigin: "100% 50%",
			transition: "transform 0.3s ease-out"
		};

		return {
			":before": {
				...pseudo,
				transform: `translate3d(0, ${mouseEntered ? "-100%" : "0"}, 0)`
			},
			":after": {
				...pseudo,
				transform: `translate3d(0, ${mouseEntered ? "0" : "100%"}, 0)`
			}
		};
	};

	const selectStyles: StylesConfig<TOption> = {
		control: (styles) => ({
			...styles,
			backgroundColor: "var(--theme-color)",
			border: "none",
			borderRadius: 100,
			cursor: "pointer"
		}),
		container: (styles) => ({ ...styles, height: "unset" }),
		indicatorsContainer: (styles) => ({ ...styles, padding: "0 10px 0 0" }),
		clearIndicator: (styles) => ({
			...styles,
			color: "var(--background-color)",
			":hover": {
				color: "var(--background-color)"
			}
		}),
		dropdownIndicator: (styles) => ({
			...styles,
			marginTop: -1,
			color: "var(--background-color)",
			":hover": {
				color: "var(--background-color)"
			}
		}),
		indicatorSeparator: () => ({ display: "none" }),
		valueContainer: (styles) => ({
			...styles,
			padding: "14px 0 12px 20px"
		}),
		singleValue: (styles, { data }) => ({
			...styles,
			position: "relative",
			marginTop: -2,
			textTransform: "uppercase",
			color: "var(--background-color)",
			fontSize: 14,
			fontWeight: 600,
			letterSpacing: "0.07em",
			overflow: "hidden",
			...valueStyles(data.label?.toString())
		}),
		placeholder: (styles, { children }) => ({
			...styles,
			position: "relative",
			marginTop: -2,
			textTransform: "uppercase",
			color: "var(--background-color)",
			fontSize: 14,
			fontWeight: 600,
			letterSpacing: "0.07em",
			overflow: "hidden",
			...valueStyles(children?.toString())
		}),
		option: (styles) => ({
			...styles,
			textTransform: "uppercase",
			cursor: "pointer"
		})
	};

	return (
		<div
			onMouseEnter={() => setMouseEntered(true)}
			onMouseLeave={() => setMouseEntered(false)}
			style={wrapperStyle}
			className={wrapperClassName}
		>
			<ReactSelect
				{...props}
				className={className}
				styles={selectStyles}
				onBlur={() => setMouseEntered(false)}
				onInputChange={() => setMouseEntered(false)}
			/>
		</div>
	);
};

/** @alias */
export default Select;
