import clsx from "clsx";
import type { TBaseComponent } from "@types";

import styles from "./Container.module.scss";

/** @public */
export const Container: React.FC<TBaseComponent> = ({
	children,
	className,
	...props
}) => {
	return (
		<div {...props} className={clsx(styles.container, className)}>
			{children}
		</div>
	);
};

/** @alias */
export default Container;
