import Image from "next/image";
import { VideoPlay } from "@shared/ui/components";

import PictureBottom from "@images/picture2.jpeg";
import IconInchapin from "@images/inchapin_icon.svg";

import styles from "./ScreenBottom.module.scss";

export const ScreenBottom: React.FC = () => {
	return (
		<section className={styles.screenBottom}>
			<aside className={styles.leftSide}>
				<span className={styles.title}>О ПРОЕКТЕ</span>
				<div className={styles.pictureBottom}>
					<Image src={PictureBottom} alt="Загородный дом Inchapin" />
				</div>
				<Image
					className={styles.icon}
					src={IconInchapin}
					alt=""
					draggable={false}
				/>
			</aside>
			<div className={styles.rightSide}>
				<figure className={styles.blockFigure}></figure>
				<p className={styles.blockTitle}>
					Уютное и безопасное пространство для счастливой,
					<span> спокойной и размеренной жизни</span>
				</p>
				<p className={styles.blockDescription}>
					<span style={{ textWrap: "nowrap" }}>
						Квартиры от 65 до 356 м<sup>2</sup> с чистовой отделкой,
					</span>
					<br />
					балконами, лоджиями и террасами в собственной ЗАКРЫТОЙ
					охраняемой территории.
				</p>
				<div className={styles.video}>
					<span className={styles.videoTitle}>
						ВИДЕО О ПРОЕКТЕ
						<span>1:25 минут</span>
					</span>
					<hr className={styles.line} />
					<VideoPlay videoUrl="https://api.5-ve.ru/upload/video/Mantera_promo_768.mp4" />
				</div>
			</div>
		</section>
	);
};
