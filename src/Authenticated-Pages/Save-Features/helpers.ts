import { RouteComponentProps } from "react-router-dom";

export const getIndex = (urlData: string) => {
  return urlData === "ajo"
    ? 2
    : urlData === "safelock"
    ? 1
    : urlData === "bizzbank"
    ? 0
    : urlData === "connections"
    ? 3
    : "";
};

export const getTabString = (urlData: string) => {
  return urlData === "ajo"
    ? "AJO"
    : urlData === "safelock"
    ? "SAFELOCK"
    : urlData === "bizzbank"
    ? "BIZZBANK"
    : urlData === "connections"
    ? "CONNECTIONS"
    : "";
};

export const handleTabRouting = (
  data: number,
  history: RouteComponentProps["history"]
) => {
  if (data === 2) {
    history.push("/save/b/ajo");
  } else if (data === 1) {
    history.push("/save/b/safelock");
  } else if (data === 3) {
    history.push("/save/b/connections");
  } else if (data === 0) {
    history.push("/save/b/bizzbank");
  }
};
