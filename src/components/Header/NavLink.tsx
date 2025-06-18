import Link from "next/link";
import { ComponentProps } from "react";

export function NavLink(props: ComponentProps<typeof Link>) {
  return (
    <Link className="text-sm text-soap px-5 py-4 tracking-wide" {...props} />
  )
}
