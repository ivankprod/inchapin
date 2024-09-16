"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import { CallbackForm } from "@components";
import { Container, Burger, Modal } from "@shared/ui/components";
import { Button, Select } from "@shared/ui/elements";
import type { TOption } from "@shared/ui/elements/Select";
import { sleep } from "@shared/utils";

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
	const [callbackFormOpened, setCallbackFormOpened] = useState(false);
	const [callbackFormFade, setCallbackFormFade] = useState(false);

	const handleModalClose = () => {
		setCallbackFormFade(true);

		sleep(300).then(() => {
			setCallbackFormOpened(false);
			setCallbackFormFade(false);
		});
	};

	return (
		<>
			<div
				{...props}
				id="header"
				className={clsx(styles.header, className)}
			>
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
						<button
							className={clsx(
								styles.phoneMobile,
								styles.phoneTablet
							)}
							onClick={() => setCallbackFormOpened(true)}
						>
							<Image src={ImagePhone} alt="INCHAPIN" />
						</button>
					</div>
					<Link href="/" className={styles.logotype}>
						<Image src={ImageLogo} alt="INCHAPIN" />
					</Link>
					<div className={styles.phone}>
						<span>+7 495 527 21 21</span>
						<Button
							type="secondary"
							hoverAnimation
							onClick={() => setCallbackFormOpened(true)}
						>
							Заказать звонок
						</Button>
					</div>
					<Select
						wrapperClassName={styles.selectMobile}
						instanceId="header-select-mobile"
						options={flatOptions}
						isClearable={true}
						isSearchable={false}
						placeholder="Выбрать квартиру"
					/>
					<button
						className={styles.phoneMobile}
						onClick={() => setCallbackFormOpened(true)}
					>
						<Image src={ImagePhone} alt="" />
					</button>
				</Container>
			</div>
			<Modal
				opened={callbackFormOpened}
				inProp={callbackFormFade}
				onClose={handleModalClose}
				className={styles.modal}
			>
				<CallbackForm />
				<div className={styles.closeButton}>
					<Button type="close" onClick={handleModalClose} />
				</div>
			</Modal>
		</>
	);
};

/** @alias */
export default Header;
