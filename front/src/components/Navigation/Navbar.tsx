import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

export type NavbarProps = React.HTMLAttributes<HTMLDivElement>;

const Navbar = forwardRef<HTMLDivElement, NavbarProps>(
  ({ children, className, ...props }, ref): JSX.Element => {
    const classes = twMerge("navbar", className);

    return (
      <div
        role="navigation"
        aria-label="Navbar"
        {...props}
        className={classes}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);

const NavbarStart = forwardRef<
  HTMLDivElement,
  Omit<NavbarSectionProps, "section">
>((props, ref) => <NavbarSection {...props} section="start" ref={ref} />);

const NavbarCenter = forwardRef<
  HTMLDivElement,
  Omit<NavbarSectionProps, "section">
>((props, ref) => <NavbarSection {...props} section="center" ref={ref} />);

const NavbarEnd = forwardRef<
  HTMLDivElement,
  Omit<NavbarSectionProps, "section">
>((props, ref) => <NavbarSection {...props} section="end" ref={ref} />);

export type NavbarSectionProps = NavbarProps & {
  section: "start" | "center" | "end";
};

const NavbarSection = forwardRef<HTMLDivElement, NavbarSectionProps>(
  ({ children, section, className, style }, ref): JSX.Element => {
    const classes = twMerge(
      className,
      clsx({
        ["flex-1"]: section !== "center",
        [`navbar-${section}`]: section,
      })
    );

    return (
      <div className={classes} style={style} ref={ref}>
        {children}
      </div>
    );
  }
);

export default Object.assign(Navbar, {
  Start: NavbarStart,
  Center: NavbarCenter,
  End: NavbarEnd,
});
