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
      <Link href={"/"}>
        <Logo />
      </Link>

      <p>© {new Date().getFullYear()} </p>

      <ul>
        {settings.data.navigation.map(({ link, label }) => (
          <li key={label}>
            <PrismicNextLink field={link}> {label} </PrismicNextLink>
          </li>
        ))}
      </ul>
    </Bounded>
  );
};

export default Footer;
