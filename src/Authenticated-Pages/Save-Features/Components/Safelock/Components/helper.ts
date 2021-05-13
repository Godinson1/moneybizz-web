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
