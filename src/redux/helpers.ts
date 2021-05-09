import { RouteComponentProps } from "react-router-dom";

export const redirectUser = (
  url: string,
  history: RouteComponentProps["history"]
) => {
  if (url === "home") {
    history.push("/home");
  } else if (url === "save") {
    history.push("/save");
  }
};
