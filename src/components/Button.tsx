import { ComponentPropsWithoutRef } from "react";

type ButtonProps = {
  el: "button";
} & ComponentPropsWithoutRef<"button">;

type AnchorProps = {
  el: "a";
} & ComponentPropsWithoutRef<"a">;

function Button(props: ButtonProps | AnchorProps) {
  if (props.el === "a") {
    const { el, ...rest } = props;
    return <a {...rest} className='button'></a>;
  }

  const { el, ...rest } = props;
  return <button {...rest} className='button'></button>;
}

export default Button;
