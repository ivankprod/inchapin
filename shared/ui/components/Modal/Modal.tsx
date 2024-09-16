"use client";

import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import SmoothScrollbar from "smooth-scrollbar";
import { Scrollbar } from "smooth-scrollbar/interfaces";
import { Transition, type TransitionStatus } from "react-transition-group";
import clsx from "clsx";

import type { TBaseComponent } from "@types";

import styles from "./Modal.module.scss";

export interface IModalProps extends TBaseComponent {
	opened?: boolean;
	inProp: boolean;
}

const defaultStyle = {
	transition: "opacity 0.3s ease-in-out",
	opacity: 0
};

const transitionStyles: {
	[K in TransitionStatus]: { opacity: number };
} = {
	entering: { opacity: 1 },
	entered: { opacity: 1 },
	exiting: { opacity: 0 },
	exited: { opacity: 0 },
	unmounted: { opacity: 0 }
};

const ModalChild: React.FC<IModalProps> = ({
	inProp,
	className,
	children,
	...props
}) => {
	const scrollbar = useRef<Scrollbar>();
	const nodeRef = useRef(null);

	useEffect(() => {
		const elem = document.getElementById("modal");

		if (elem)
			scrollbar.current = SmoothScrollbar.init(elem, {
				damping: 0.075
			});

		return () => {
			scrollbar.current?.destroy();
		};
	}, []);

	return (
		<div className={styles.portal}>
			<div
				id="modal"
				style={{
					height: "100%",
					width: "100%"
				}}
			>
				<Transition nodeRef={nodeRef} in={!inProp} timeout={300} appear>
					{(state) => (
						<div
							{...props}
							ref={nodeRef}
							style={{
								...defaultStyle,
								...transitionStyles[state as TransitionStatus]
							}}
							className={clsx(styles.wrapper, className)}
						>
							{children}
						</div>
					)}
				</Transition>
			</div>
		</div>
	);
};

/** @public */
export const Modal: React.FC<IModalProps> = ({ opened, ...props }) => {
	if (!opened) return null;

	return createPortal(<ModalChild {...props} />, document.body);
};

/** @alias */
export default Modal;
