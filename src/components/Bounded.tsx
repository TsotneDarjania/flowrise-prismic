import clsx from "clsx";
import React from "react";

type BoundedProps = {
  as?: React.ElementType;
  className?: String;
  children: React.ReactNode;
};

const Bounded = ({
  as: Comp = "section",
  className,
  children,
  ...resProps
}: BoundedProps) => {
  return (
    <Comp
      className={clsx("px-4 py-10 md:py-14 md:px-6 lg:py-16", className)}
      {...resProps}
    >
      <div className=" mx-auto w-full max-w-6xl"> {children} </div>
    </Comp>
  );
};

export default Bounded;
