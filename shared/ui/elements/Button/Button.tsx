"use client";

import { useState, type ComponentProps, type ElementType } from "react";
import clsx from "clsx";

import { capitalize } from "@shared/utils";

import styles from "./Button.module.scss";

interface IButtonOwnProps<E extends ElementType = ElementType> {
	as?: E;
	type?: "primary" | "secondary" | "close";
	hoverAnimation?: boolean;
	submit?: boolean;
}

type TButtonProps<E extends ElementType> = IButtonOwnProps &
	Omit<ComponentProps<E>, keyof IButtonOwnProps>;

const defaultElement = "button";

/** @public */
export const Button: React.FC<TButtonProps<ElementType>> = <
	E extends ElementType = typeof defaultElement
>({
	as,
	href = "#",
	type = "primary",
	hoverAnimation = false,
	submit,
	children,
	className,
	...props
}: TButtonProps<E>) => {
	const [mouseEntered, setMouseEntered] = useState(false);

	const TagName = as || defaultElement;
	let submitProp = {};

	if (submit) submitProp = { type: "submit" };

	const renderChildren = hoverAnimation ? (
		<div className={styles.children}>
			<div>{children}</div>
			<div className={styles.clone}>{children}</div>
		</div>
	) : (
		children
	);

	return (
		<TagName
			{...props}
			{...submitProp}
			href={href}
			className={clsx(
				styles.button,
				styles["button" + capitalize(type)],
				hoverAnimation && styles.noOpacity,
				mouseEntered && styles.hovered,
				className
			)}
			onMouseEnter={() => setMouseEntered(true)}
			onMouseLeave={() => setMouseEntered(false)}
		>
			{renderChildren}
		</TagName>
	);
};

/** @alias */
export default Button;
