import React from "react";

export type dropdownTypes =
  "string | number | boolean | (string | number | boolean)[] | undefined";

export type dropdownSetStateType = React.SetStateAction<
  | "string | number | boolean | (string | number | boolean)[] | undefined"
  | undefined
>;

export type safelockType = {
  name: string;
  amount: string;
  interest: string;
  status: string;
};
