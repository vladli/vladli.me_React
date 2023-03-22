import { forwardRef } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

import { ComponentSize } from "components/@types";

export type MenuProps = React.HTMLAttributes<HTMLUListElement> & {
  normal?: ComponentSize | boolean; // Applies default paddings
  compact?: ComponentSize | boolean; // Applies smaller padding
  vertical?: ComponentSize | boolean; // Vertical menu (default)
  horizontal?: ComponentSize | boolean; // Horizontal menu
};

interface ModifierMap {
  [key: string]: {
    [key: string]: string | undefined;
  };
}

const DYNAMIC_MODIFIERS: ModifierMap = {
  compact: {
    true: "menu-compact",
    xs: "xs:menu-compact",
    sm: "sm:menu-compact",
    md: "md:menu-compact",
    lg: "lg:menu-compact",
  },
  normal: {
    true: "menu-normal",
    xs: "xs:menu-normal",
    sm: "sm:menu-normal",
    md: "md:menu-normal",
    lg: "lg:menu-normal",
  },
  horizontal: {
    true: "menu-horizontal",
    xs: "xs:menu-horizontal",
    sm: "sm:menu-horizontal",
    md: "md:menu-horizontal",
    lg: "lg:menu-horizontal",
  },
  vertical: {
    true: "menu-vertical",
    xs: "xs:menu-vertical",
    sm: "sm:menu-vertical",
    md: "md:menu-vertical",
    lg: "lg:menu-vertical",
  },
};

const Menu = forwardRef<HTMLUListElement, MenuProps>(
  ({ normal, compact, horizontal, vertical, className, ...props }, ref) => {
    const classes = twMerge(
      "menu",
      className,
      clsx({
        [(compact && DYNAMIC_MODIFIERS.compact[compact.toString()]) || ""]:
          compact,
        [(normal && DYNAMIC_MODIFIERS.normal[normal.toString()]) || ""]: normal,
        [(horizontal && DYNAMIC_MODIFIERS.horizontal[horizontal.toString()]) ||
        ""]: horizontal,
        [(vertical && DYNAMIC_MODIFIERS.vertical[vertical.toString()]) || ""]:
          vertical,
      })
    );

    return <ul role="menu" className={classes} {...props} ref={ref} />;
  }
);

export type MenuItemProps = React.LiHTMLAttributes<HTMLLIElement> & {
  disabled?: boolean;
};

const MenuItem = forwardRef<HTMLLIElement, MenuItemProps>(
  ({ className, disabled, ...props }, ref) => {
    const classes = twMerge(
      className,
      clsx({
        disabled: disabled,
      })
    );

    return <li role="menuitem" className={classes} {...props} ref={ref} />;
  }
);

export type MenuTitleProps = React.LiHTMLAttributes<HTMLLIElement>;

const MenuTitle = forwardRef<HTMLLIElement, MenuTitleProps>(
  ({ className, ...props }, ref) => {
    const classes = twMerge("menu-title", className);

    return <li {...props} className={classes} ref={ref} />;
  }
);

export default Object.assign(Menu, { Title: MenuTitle, Item: MenuItem });
