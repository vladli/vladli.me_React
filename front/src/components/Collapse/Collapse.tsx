import { forwardRef, useRef, useState } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

import CollapseTitle from "./CollapseTitle";
import CollapseContent from "./CollapseContent";

export type CollapseProps = React.HTMLAttributes<HTMLDivElement> & {
  checkbox?: boolean;
  icon?: "arrow" | "plus";
  open?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  onToggle?: () => void;
};

const Collapse = forwardRef<HTMLDivElement, CollapseProps>(
  (
    {
      children,
      checkbox,
      icon,
      open,
      className,
      onOpen,
      onClose,
      onToggle,
      ...props
    },
    ref
  ): JSX.Element => {
    const classes = twMerge(
      "collapse",
      className,
      clsx({
        [`collapse-${icon}`]: icon,
        "collapse-open": open === true,
        "collapse-close": open === false,
      })
    );

    const [isChecked, setIsChecked] = useState(open);
    const checkboxRef = useRef<HTMLInputElement>(null);

    // Handle events for checkbox changes
    const handleCheckboxChange = () => {
      if (onToggle) {
        onToggle();
      }
      if (onOpen && checkboxRef.current?.checked) {
        onOpen();
      } else if (onClose && !checkboxRef.current?.checked) {
        onClose();
      }

      setIsChecked(checkboxRef.current?.checked);
    };

    // Handle blur events, specifically handling open/close for non checkbox types
    const handleBlur = (event: React.FocusEvent<HTMLDivElement, Element>) => {
      if (!checkbox && onToggle) onToggle();
      if (!checkbox && onClose) onClose();
      if (props.onBlur) props.onBlur(event);
    };

    // Handle focus events, specifically handling open/close for non checkbox types
    const handleFocus = (event: React.FocusEvent<HTMLDivElement, Element>) => {
      if (!checkbox && onToggle) onToggle();
      if (!checkbox && onOpen) onOpen();
      if (props.onFocus) props.onFocus(event);
    };

    return (
      <div
        aria-expanded={open}
        {...props}
        ref={ref}
        tabIndex={isChecked === true ? undefined : 0}
        className={classes}
        onBlur={handleBlur}
        onFocus={handleFocus}
      >
        {checkbox && (
          <input
            type="checkbox"
            tabIndex={isChecked === true ? 0 : undefined}
            className="peer"
            ref={checkboxRef}
            onChange={handleCheckboxChange}
          />
        )}
        {children}
      </div>
    );
  }
);

export default Object.assign(Collapse, {
  Title: CollapseTitle,
  Content: CollapseContent,
});
