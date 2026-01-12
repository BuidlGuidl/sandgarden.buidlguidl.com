import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

/**
 * Site Menu
 */
export const Menu = () => {
  const { asPath } = useRouter();
  return (
    <div>
      <ul className="px-4 flex gap-4">
        <li>
          <Link href="/" className={`${asPath === "/" ? "" : "link"} link-primary underline-offset-2`}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/members" className={`${asPath === "/members" ? "" : "link"} link-primary underline-offset-2`}>
            Members
          </Link>
        </li>
        <li>
          <Link href="/projects" className={`${asPath === "/projects" ? "" : "link"} link-primary underline-offset-2`}>
            Projects
          </Link>
        </li>
        <li>
          <Link href="/faq" className={`${asPath === "/faq" ? "" : "link"} link-primary underline-offset-2`}>
            F.A.Q.
          </Link>
        </li>
        <li>
          <Link href="/2025" className={`${asPath === "/2025" ? "" : "link"} link-primary underline-offset-2`}>
            2025 Recap
          </Link>
        </li>
      </ul>
    </div>
  );
};
