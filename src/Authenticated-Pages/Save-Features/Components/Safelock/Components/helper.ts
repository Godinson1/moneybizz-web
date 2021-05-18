export const getDuration = (url: string) => {
  let currentUrl = url.slice(-5);
  return currentUrl === "10-30"
    ? "10 - 30"
    : currentUrl === "31-60"
    ? "31 - 60"
    : currentUrl === "61-90"
    ? "61 - 90"
    : currentUrl === "1-365"
    ? "91 - 365"
    : "";
};

export const getInterest = (url: string) => {
  let currentUrl = url.slice(-5);
  return currentUrl === "10-30"
    ? "3"
    : currentUrl === "31-60"
    ? "4"
    : currentUrl === "61-90"
    ? "5"
    : currentUrl === "1-365"
    ? "6"
    : "";
};
