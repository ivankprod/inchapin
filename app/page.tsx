import Image from "next/image";

import Picture1 from "@images/picture1.jpeg";
import ImageText from "@images/inchapin_text.svg";

import styles from "./page.module.scss";

export default function Home() {
	return (
		<main className={styles.main}>
			<section className={styles.screen1}>
				<div className={styles.picture1}>
					<Image
						src={Picture1}
						alt="Загородный дом Inchapin"
						priority
					/>
				</div>
				<p className={styles.description}>
					Дом бизнес-класса для ценителей роскоши
				</p>
				<Image
					className={styles.text}
					src={ImageText}
					alt="Inchapin"
					draggable={false}
				/>
			</section>
		</main>
	);
}
