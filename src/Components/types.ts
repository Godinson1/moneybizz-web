export type PaymentOptionProps = {
  setOpen: Function;
  amount: string;
};

export type dropdownType = {
  dropdown:
    | string
    | number
    | boolean
    | (string | number | boolean)[]
    | undefined;
};
