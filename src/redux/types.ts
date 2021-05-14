export type cardType = { amount: string };

export type bankDataType = {
  account_number: string;
  amount: string;
  code: string;
};

export type OtpType = { otp: string };

export type codeData = {
  code: string;
};

export type settingsData = {
  interval: string;
  hour: number;
  minute: number;
  weekday: string;
  monthday: string;
  amount: string;
  active: boolean;
};

export type verifyUserType = {
  phone: string;
  address: string;
  stateOrigin: string;
  dateOfBirth: string;
  sex: string;
};
