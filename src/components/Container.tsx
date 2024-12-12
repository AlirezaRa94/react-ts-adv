import {
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
} from "react";

type ContainerProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

function Container<C extends ElementType>({
  as,
  children,
  ...rest
}: ContainerProps<C>) {
  const Component = as || "div";
  return <Component {...rest}>{children}</Component>;
}

export default Container;
