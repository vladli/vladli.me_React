import clsx from "clsx";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

import ModalActions from "./ModalActions";
import ModalBody from "./ModalBody";
import ModalHeader from "./ModalHeader";

type Props = React.HtmlHTMLAttributes<HTMLDivElement> & {
  open?: boolean;
  responsive?: boolean;
  onClickBackDrop?: () => void;
};

const Modal = forwardRef<HTMLDivElement, Props>(
  (
    { children, open, responsive, onClickBackDrop, className, ...props },
    ref
  ) => {
    const classes = twMerge(
      "modal",
      clsx({
        "modal-open": open,
        "modal-botton sm:modal-middle": responsive,
      })
    );
    const bodyClasses = twMerge("modal-box", className);
    return (
      <div
        aria-label="Modal"
        aria-hidden={!open}
        aria-modal={open}
        className={classes}
        onClick={(e) => {
          e.stopPropagation();
          if (e.target === e.currentTarget) {
            e.stopPropagation();
            if (onClickBackDrop) {
              onClickBackDrop();
            }
          }
        }}
      >
        <div {...props} className={bodyClasses} ref={ref}>
          {children}
        </div>
      </div>
    );
  }
);
Modal.displayName = "Modal";

export default Object.assign(Modal, {
  Header: ModalHeader,
  Body: ModalBody,
  Actions: ModalActions,
});
