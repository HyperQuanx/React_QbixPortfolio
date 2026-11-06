import { createPortal } from "react-dom";

/** @param {{ children: import("react").ReactNode }} props */
const ModalPortal = ({ children }) => createPortal(children, document.body);

export default ModalPortal;
