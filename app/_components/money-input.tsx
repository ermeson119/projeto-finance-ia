import { NumericFormat, NumericFormatProps } from "react-number-format";
import { Input, InputProps } from "../_components/ui/input";
import React, { forwardRef } from "react";

export const MoneyInput = forwardRef<
  HTMLInputElement,
  NumericFormatProps<InputProps>
>(({ ...props }, ref) => {
  return (
    <NumericFormat
      {...props}
      thousandSeparator="."
      decimalSeparator=","
      prefix="R$ "
      allowNegative={false}
      customInput={Input}
      getInputRef={ref}
    />
  );
});

MoneyInput.displayName = "MoneyInput";
