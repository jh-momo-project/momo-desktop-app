/**
 * @component FormProvider
 */

import { ReactNode } from "react";
import { FormProvider as Form, UseFormReturn } from "react-hook-form";

// ----------------------------------------------------------------------

type Props = {
  children: ReactNode;
  methods: UseFormReturn<any>;
  onSubmit?: VoidFunction;
};

const FormProvider = ({ children, onSubmit, methods }: Props) => {
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </Form>
  );
};
export default FormProvider;
