import { NavLink } from "./NavLink";
import { SignUpButton } from "./SignUpButton";

export function NavLinks() {
  return (
    <nav className="tracking-[0.01em]">
      <ul>
        <li>
          <NavLink href='/'>Search</NavLink>
          <NavLink href='/'>Social</NavLink>
          <NavLink href='/'>Forum</NavLink>
          <NavLink href='/'>Login</NavLink>
          <SignUpButton />
        </li>
      </ul>
    </nav>
  )
}
