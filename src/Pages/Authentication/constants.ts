const constant = 2;

const LOGIN_ERROR_HEADER = "Error trying to Login..";
const REGISTER_ERROR_HEADER = "Error trying to Register";
const REGISTER = "Register";
const LOGIN = "Login";
const DONT_HAVE_ACCOUNT = "Don't have an account?";
const DIDNT_RECEIVE_CODE = " Didn't receive code?";
const ALREADY_REGISTERED = "Already have an account?";
const TRY_AGAIN = "Try Again.";
const LOGO = "MoneyBizz";
const REGISTER_HEADER = "Create a Secure Account";
const LOGIN_HEADER = "Login to your Account";
const LOGIN_DESC = "Securely login to continue the bizzer experience..";
const REGISTER_DESC = "Begin the journey to endless financial possibilities..";
const FORGOT_PASSWORD = "Forgot Password?";
const VERIFY_EMAIL = "Verify Email";
const VERIFY_EMAIL_DESC =
  "Securely verify email attached to your moneybizz account.";
const EMAIL = "Email";
const VERIFY = "Verify";
const RESET = "Reset";
const RESET_HEADER = "Reset Password";
const RESET_DESC =
  "Use activation code sent to your email and enter new password.";

const ACTIVATE = "Activate";
const ACTIVATION_CODE = "Activation Code";
const ACTIVATE_HEADER = "Activate Account";
const ACTIVATE_DESC =
  " Enter bizz activation code sent to your email to continue the bizzer experience.";

const REGISTER_FORM = [
  {
    label: "First Name",
    placeholder: "Enter First Name",
    type: "text",
    className: "auth-input",
  },
  {
    label: "Last Name",
    placeholder: "Enter Last Name",
    type: "text",
    className: "auth-input",
  },
  {
    label: "Email",
    placeholder: "Enter email address",
    type: "email",
    className: "auth-input",
  },
  {
    label: "Handle",
    placeholder: "Enter Handle",
    type: "text",
    className: "auth-input",
  },
  {
    label: "Password",
    placeholder: "Enter Password",
    type: "password",
    className: "auth-input",
  },
];

const LOGIN_FORM = [
  {
    label: "Email or Handle",
    placeholder: "Enter/Handle",
    type: "text",
    name: "data",
    className: "auth-input",
  },
  {
    label: "Password",
    name: "password",
    placeholder: "Password",
    type: "password",
    className: "auth-input",
  },
];

const RESET_FORM = [
  {
    label: "Bizz Code",
    placeholder: "Bizz Code",
    type: "text",
    className: "auth-input",
  },
  {
    label: "Password",
    placeholder: "Password",
    type: "password",
    className: "auth-input",
  },
  {
    label: "Confirm Password",
    placeholder: "Confirm Password",
    type: "password",
    className: "auth-input",
  },
];

export {
  constant,
  REGISTER_FORM,
  LOGIN_FORM,
  LOGIN,
  LOGIN_ERROR_HEADER,
  REGISTER_ERROR_HEADER,
  REGISTER,
  DONT_HAVE_ACCOUNT,
  ALREADY_REGISTERED,
  TRY_AGAIN,
  LOGO,
  REGISTER_HEADER,
  REGISTER_DESC,
  LOGIN_HEADER,
  LOGIN_DESC,
  FORGOT_PASSWORD,
  VERIFY_EMAIL,
  VERIFY_EMAIL_DESC,
  EMAIL,
  VERIFY,
  RESET_DESC,
  RESET_HEADER,
  RESET_FORM,
  DIDNT_RECEIVE_CODE,
  RESET,
  ACTIVATE,
  ACTIVATE_HEADER,
  ACTIVATE_DESC,
  ACTIVATION_CODE,
};
