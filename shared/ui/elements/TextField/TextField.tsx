"use client";

import { useState } from "react";
import { useMask } from "@react-input/mask";
import clsx from "clsx";

import type { TBaseComponent } from "@types";

import styles from "./TextField.module.scss";

interface ITextFieldProps extends TBaseComponent<"input"> {
	wrapperClassName?: string;
	errorMessage?: string;
}

/** @public */
export const TextField: React.FC<ITextFieldProps> = ({
	wrapperClassName,
	errorMessage,
	value,
	placeholder,
	type,
	onFocus,
	className,
	...props
}) => {
	const [focused, setFocused] = useState(false);
	const inputRef = useMask({
		mask: "+7 (___) ___-__-__",
		replacement: { _: /\d/ },
		showMask: focused
	});

	const filled = value != "" && value != "+7 (___) ___-__-__";

	return (
		<div className={clsx(styles.wrapper, wrapperClassName)}>
			<input
				{...props}
				value={value}
				type={type === "tel" ? "text" : type}
				ref={type === "tel" ? inputRef : undefined}
				className={clsx(
					styles.input,
					filled && styles.filled,
					className
				)}
				onFocus={(e) => {
					setFocused(true);
					onFocus?.(e);
				}}
			/>
			<label className={styles.placeholder}>{placeholder}</label>
			<span className={styles.errorMessage}>{errorMessage}</span>
		</div>
	);
};

/** @alias */
export default TextField;
