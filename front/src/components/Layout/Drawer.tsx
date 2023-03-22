import { ReactNode } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export type DrawerProps = React.HTMLAttributes<HTMLDivElement> & {
  side: ReactNode;
  open?: boolean;
  mobile?: boolean;
  end?: boolean;
  toggleClassName?: string;
  contentClassName?: string;
  sideClassName?: string;
  overlayClassName?: string;
  onClickOverlay?: () => void;
};

const Drawer = ({
  children,
  side,
  open,
  mobile,
  end,
  className,
  toggleClassName,
  contentClassName,
  sideClassName,
  overlayClassName,
  onClickOverlay,
  ...props
}: DrawerProps) => {
  const classes = twMerge(
    "drawer",
    className,
    clsx({
      "drawer-mobile": mobile,
      "drawer-end": end,
    })
  );

  return (
    <div aria-expanded={open} {...props} className={classes}>
      <input
        type="checkbox"
        className={clsx("drawer-toggle", toggleClassName)}
        checked={open}
        readOnly
      />
      <div className={clsx("drawer-content", contentClassName)}>{children}</div>
      <div className={clsx("drawer-side", sideClassName)}>
        <label
          className={clsx("drawer-overlay", overlayClassName)}
          onClick={onClickOverlay}
        ></label>
        {side}
      </div>
    </div>
  );
};

export default Drawer;
