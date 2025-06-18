import { ComponentProps, ComponentPropsWithoutRef, ElementType, PropsWithChildren } from "react";

type AsProp<C extends ElementType> = {
  as?: C;
};


export type PolymorphicComponentProps<
  C extends ElementType,
  Props = {}
> = AsProp<C> & Props & Omit<ComponentPropsWithoutRef<C>, keyof (Props & AsProp<C>)>;

