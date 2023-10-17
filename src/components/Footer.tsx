import React from "react";
import { createClient } from "@/prismicio";
import Link from "next/link";
import { PrismicNextLink } from "@prismicio/next";
import Logo from "@/components/Logo";
import Bounded from "./Bounded";

const Footer = async () => {
  const client = createClient();

  const settings = await client.getSingle("settings");

  return (
    <Bounded as="footer">
      <div className=" flex sm:flex-row flex-col justify-between items-center gap-6">

      <Link href={"/"}>
        <Logo />
      </Link>

      <p className="text-xs">© {new Date().getFullYear()} </p>

      <ul className="flex">
        {settings.data.navigation.map(({ link, label }) => (
          <li key={label}>
            <PrismicNextLink field={link} className="p-3"> {label} </PrismicNextLink>
          </li>
        ))}
      </ul>

      </div>
     
    </Bounded>
  );
};

export default Footer;
