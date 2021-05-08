import { RouteComponentProps } from "react-router-dom";

export const getIndex = (urlData: string) => {
  return urlData === "ajo"
    ? 1
    : urlData === "safelock"
    ? 2
    : urlData === "bizzbank"
    ? 0
    : urlData === "targets"
    ? 3
    : urlData === "soon"
    ? 4
    : "";
};

export const getTabString = (urlData: string) => {
  return urlData === "ajo"
    ? "AJO"
    : urlData === "safelock"
    ? "SAFELOCK"
    : urlData === "bizzbank"
    ? "BIZZBANK"
    : urlData === "targets"
    ? "TARGETS"
    : urlData === "soon"
    ? "COMING SOON"
    : "";
};

export const handleTabRouting = (
  data: number,
  history: RouteComponentProps["history"]
) => {
  if (data === 1) {
    history.push("/save/ajo");
  } else if (data === 3) {
    history.push("/save/targets");
  } else if (data === 2) {
    history.push("/save/safelock");
  } else if (data === 4) {
    history.push("/save/soon");
  } else if (data === 0) {
    history.push("/save/bizzbank");
  }
};
