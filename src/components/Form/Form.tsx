import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { TypeWithKey } from "@/models/type-with-key";
export interface FormInterface {
  className?: string;
  children: React.ReactNode;
  onSubmit(data: TypeWithKey<string>): void;
}

const Form: React.FC<FormInterface> = ({ className, children, onSubmit }) => {
  const methods = useForm({ mode: "onBlur" });
  const { handleSubmit } = methods;
  return (
    <FormProvider {...methods}>
      <form className={className} onSubmit={handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
