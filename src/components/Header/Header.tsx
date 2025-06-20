import Link from "next/link";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";

export function Header() {
  return (
    <header className="hidden lg:flex bg-dark-gunmetal min-h-20 px-12 items-center">
      <Link href='/'>
        <Logo width={50} height={50} />
      </Link>
      <NavLinks />
    </header>
  )
}
