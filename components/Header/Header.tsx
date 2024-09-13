import Image from "next/image";
import clsx from "clsx";

import { Burger, Container } from "@shared/ui/components";
import { Button } from "@shared/ui/elements";
import Select, { type TOption } from "@shared/ui/elements/Select";
import type { TBaseComponent } from "@types";

import ImageLogo from "@images/inchapin_logo.svg";

import styles from "./Header.module.scss";

const flatOptions: TOption[] = [
	{ value: "flat1", label: "Квартира 1" },
	{ value: "flat2", label: "Квартира 2" },
	{ value: "flat3", label: "Квартира 3" }
];

/** @public */
export const Header: React.FC<TBaseComponent> = ({ className, ...props }) => {
	return (
		<Container {...props} className={clsx(styles.header, className)}>
			<div className={styles.nav}>
				<Burger>МЕНЮ</Burger>
				<Select
					instanceId="header-select"
					options={flatOptions}
					isClearable={true}
					isSearchable={false}
					placeholder="Выбрать квартиру"
				/>
			</div>
			<Image src={ImageLogo} alt="INCHAPIN" className={styles.logotype} />
			<div className={styles.phone}>
				<span>+7 495 527 21 21</span>
				<Button type="secondary" hoverAnimation>
					Заказать звонок
				</Button>
			</div>
		</Container>
	);
};

/** @alias */
export default Header;
