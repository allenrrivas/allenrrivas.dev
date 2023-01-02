import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import { FC } from "react";
import { clsx } from "clsx";

const NavItem: FC<{ href: string; target: string, rel: string, text: string; router: NextRouter }> = ({
  href,
  target,
  rel,
  text,
  router,
}) => {
  const isActive = router.pathname === (href === "/home" ? "/" : href);

  return (
    <Link legacyBehavior href={href === "/home" ? "/" : href}>
      <a
        className={clsx(
          "text-md font-bold mr-4 md:mr-6 md:text-lg",
          isActive
            ? "medium-text font-semibold text-indigo-500"
            : "transition-colors duration-300 hover:text-indigo-500"
        )}
        target={target}
        rel={rel}
      >
        {text}
      </a>
    </Link>
  );
};

const Navbar = () => {
  const router = useRouter();
  const links = ["home", "moments"];

  return (
    <nav className="mx-auto flex items-center justify-start capitalize lg:w-3/6 2xl:w-2/6 w-4/6 m-4">
       {links.map((link, index) => (
         <NavItem
            href={`/${link === "MOMENTS" ? "moments" : link}`}
            target={""}
            rel={""}
            text={link}
            router={router}
            key={index}
         />
       ))}

      <NavItem
          href={"https://github.com/allenrrivas"}
          target={"_blank"}
          rel={"noopener"}
          text={"github"}
          router={router}
        />

        <NavItem
          href={"mailto:allenrrivas.30@gmail.com"}
          target={""}
          rel={"noopener"}
          text={"email"}
          router={router}
        />
    </nav>
  );
};

export default Navbar;