import Image from "next/image";

import PictureTop from "@images/picture1.jpeg";
import ImageText from "@images/inchapin_text.svg";

import styles from "./ScreenTop.module.scss";

export const ScreenTop: React.FC = () => {
	return (
		<section className={styles.screenTop}>
			<div className={styles.pictureTop}>
				<Image
					src={PictureTop}
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
	);
};
