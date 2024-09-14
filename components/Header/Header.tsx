import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import { Burger, Container } from "@shared/ui/components";
import { Button } from "@shared/ui/elements";
import Select, { type TOption } from "@shared/ui/elements/Select";
import type { TBaseComponent } from "@types";

import ImageLogo from "@images/inchapin_logo.svg";
import ImagePhone from "@images/phone.svg";

import styles from "./Header.module.scss";

const flatOptions: TOption[] = [
	{ value: "flat1", label: "Квартира 1" },
	{ value: "flat2", label: "Квартира 2" },
	{ value: "flat3", label: "Квартира 3" }
];

/** @public */
export const Header: React.FC<TBaseComponent> = ({ className, ...props }) => {
	return (
		<div {...props} className={clsx(styles.header, className)}>
			<Container className={styles.content}>
				<div className={styles.nav}>
					<Burger>МЕНЮ</Burger>
					<Select
						wrapperClassName={styles.select}
						instanceId="header-select"
						options={flatOptions}
						isClearable={true}
						isSearchable={false}
						placeholder="Выбрать квартиру"
					/>
					<Link
						href="/"
						className={clsx(
							styles["phone-mobile"],
							styles["phone-tablet"]
						)}
					>
						<Image src={ImagePhone} alt="INCHAPIN" />
					</Link>
				</div>
				<Link href="/" className={styles.logotype}>
					<Image src={ImageLogo} alt="INCHAPIN" />
				</Link>
				<div className={styles.phone}>
					<span>+7 495 527 21 21</span>
					<Button type="secondary" hoverAnimation>
						Заказать звонок
					</Button>
				</div>
				<Select
					wrapperClassName={styles["select-mobile"]}
					instanceId="header-select-mobile"
					options={flatOptions}
					isClearable={true}
					isSearchable={false}
					placeholder="Выбрать квартиру"
				/>
				<Link href="/" className={styles["phone-mobile"]}>
					<Image src={ImagePhone} alt="INCHAPIN" />
				</Link>
			</Container>
		</div>
	);
};

/** @alias */
export default Header;
