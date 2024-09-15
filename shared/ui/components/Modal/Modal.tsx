import { createPortal } from "react-dom";

import { TBaseComponent } from "@types";

import styles from "./Modal.module.scss";

export interface IModalProps extends TBaseComponent {
	opened: boolean;
}

/** @public */
export const Modal: React.FC<IModalProps> = ({
	opened,
	children,
	...props
}) => {
	if (!opened) return null;

	return createPortal(
		<div {...props} className={styles.wrapper}>
			{children}
		</div>,
		document.body
	);
};

/** @alias */
export default Modal;
