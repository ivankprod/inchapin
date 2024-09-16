"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";

import { Modal } from "@shared/ui/components";
import { Button } from "@shared/ui/elements";
import type { TBaseComponent } from "@types";

import IconPlay from "@images/play.svg";

import styles from "./VideoPlay.module.scss";
import { sleep } from "@shared/utils";

interface IVideoPlayProps extends TBaseComponent<"button"> {
	videoUrl: string;
}

/** @public */
export const VideoPlay: React.FC<IVideoPlayProps> = ({
	videoUrl,
	className,
	...props
}) => {
	const [mouseEntered, setMouseEntered] = useState(false);
	const [videoOpened, setVideoOpened] = useState(false);
	const [videoModalFade, setVideoModalFade] = useState(false);

	const handleModalClose = () => {
		setVideoModalFade(true);

		sleep(300).then(() => {
			setVideoOpened(false);
			setVideoModalFade(false);
		});
	};

	return (
		<>
			<button
				{...props}
				className={clsx(styles.button, className)}
				onMouseEnter={() => setMouseEntered(true)}
				onMouseLeave={() => setMouseEntered(false)}
				onClick={() => setVideoOpened(true)}
			>
				<div
					className={clsx(
						styles.text,
						mouseEntered && styles.textHovered
					)}
				>
					<Image src={IconPlay} alt="" draggable={false} />
					<span>PLAY</span>
				</div>
			</button>
			<Modal
				opened={videoOpened}
				inProp={videoModalFade}
				onClose={handleModalClose}
			>
				<video
					className={styles.video}
					src={videoUrl}
					controls
					autoPlay
				>
					Ваш браузер не поддерживает видео
				</video>
				<div className={styles.closeButton}>
					<Button type="close" onClick={handleModalClose} />
				</div>
			</Modal>
		</>
	);
};

/** @alias */
export default VideoPlay;
