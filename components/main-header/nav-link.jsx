"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./nav-link.module.css";

export default function NavLink({ path, name }) {
  const activePath = usePathname();
  console.log(activePath);
  return (
    <Link
      href={path}
      className={activePath.startsWith(path) ? classes.active : undefined}
    >
      {name}
    </Link>
  );
}
