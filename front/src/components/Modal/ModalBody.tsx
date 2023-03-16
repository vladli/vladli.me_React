import { forwardRef } from "react";

type ModalBodyProps = React.HTMLAttributes<HTMLDivElement>;

const ModalBody = forwardRef<HTMLDivElement, ModalBodyProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div {...props} className={className} ref={ref}>
        {children}
      </div>
    );
  }
);

ModalBody.displayName = "ModalBody";

export default ModalBody;
