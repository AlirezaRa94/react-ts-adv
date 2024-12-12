import { type ComponentPropsWithoutRef, type FormEvent } from "react";

type FormProps = ComponentPropsWithoutRef<"form"> & {
  onSave: (data: unknown) => void;
};

function Form({ onSave, children, ...rest }: FormProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    onSave(data);
  }

  return (
    <form {...rest} onSubmit={handleSubmit}>
      {children}
    </form>
  );
}

export default Form;
