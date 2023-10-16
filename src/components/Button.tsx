import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next";
import clsx from "clsx";
import React from "react";

const Button = ({ className, ...resProps }: PrismicNextLinkProps) => {
  return (
    <PrismicNextLink
      className={clsx(
        "block w-fit bg-cyan-700 hover:bg-cyan-800 transition-colors duration-200 ease-in-out" +
          " py-3 px-12 rounded-full font-display text-white font-bold text-base tracking-wider",
        className
      )}
      {...resProps}
    />
  );
};

export default Button;
