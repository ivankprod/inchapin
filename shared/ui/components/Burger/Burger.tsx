import Image from "next/image";
import clsx from "clsx";

import type { TBaseComponent } from "@types";

import IconBurgerLine from "@images/burger_line.svg";

import styles from "./Burger.module.scss";

/** @public */
export const Burger: React.FC<TBaseComponent<"button">> = ({
	children,
	className,
	...props
}) => {
	return (
		<button {...props} className={clsx(styles.burger, className)}>
			<div className={styles.icon}>
				<Image src={IconBurgerLine} alt="" />
				<Image src={IconBurgerLine} alt="" />
				<Image src={IconBurgerLine} alt="" />
			</div>
			<div>{children}</div>
		</button>
	);
};

/** @alias */
export default Burger;
