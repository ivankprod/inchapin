"use client";

import { useRef, useEffect } from "react";
import SmoothScrollbar from "smooth-scrollbar";
import { Scrollbar } from "smooth-scrollbar/interfaces";

/** @public */
export const Scroller: React.FC = () => {
	const scrollbar = useRef<Scrollbar>();

	useEffect(() => {
		scrollbar.current = SmoothScrollbar.init(document.body, {
			damping: 0.075
		});

		const header = document.getElementById("header");
		scrollbar.current?.addListener(({ offset: { x, y } }) => {
			if (header)
				header.style.transform = `translate3d(${x}px, ${y}px, 0)`;
		});

		return () => {
			scrollbar.current?.destroy();
			header?.removeEventListener;
		};
	}, []);

	return null;
};

/** @alias */
export default Scroller;
