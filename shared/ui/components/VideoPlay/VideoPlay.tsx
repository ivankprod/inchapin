"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";

import { Modal } from "@shared/ui/components";
import type { TBaseComponent } from "@types";

import IconPlay from "@images/play.svg";

import styles from "./VideoPlay.module.scss";

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
			<Modal opened={videoOpened}>
				<video
					className={styles.video}
					src={videoUrl}
					controls
					autoPlay
				>
					Ваш браузер не поддерживает видео
				</video>
				<button
					className={styles.closeButton}
					onClick={() => setVideoOpened(false)}
				/>
			</Modal>
		</>
	);
};

/** @alias */
export default VideoPlay;
