import { NavLink } from "./NavLink";

export function NavLinks() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink href='/'>Search</NavLink>
          <NavLink href='/'>Social</NavLink>
          <NavLink href='/'>Forum</NavLink>
        </li>
      </ul>
    </nav>
  )
}
