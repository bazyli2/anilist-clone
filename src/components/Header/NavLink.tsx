import { PolymorphicComponentProps } from "@/utils/polymorphic";
import Link from "next/link";
import { ElementType } from "react";

export function NavLink<C extends ElementType = typeof Link>(props: PolymorphicComponentProps<C>) {
  const Component: ElementType = props.as || Link;
  return (
    <Component className="text-sm text-cadet-blue px-5 py-4 tracking-wide font-semibold hover:text-soap transition-colors ease-in-out duration-150" {...props} />
  )
}
