import { Ajo, BizzBank, ComingSoon, Safelock, Targets } from "./Components";

export const panes = [
  {
    menuItem: {
      key: "Bizz Bank",
      icon: "th",
      content: "Bizz Bank",
      color: "blue",
    },
    render: () => <BizzBank />,
  },
  {
    menuItem: { key: "Ajo", icon: "save", content: "Ajo", color: "green" },
    render: () => <Ajo />,
  },
  {
    menuItem: {
      key: "Safelock",
      icon: "lock",
      content: "Safelock",
      color: "red",
    },
    render: () => <Safelock />,
  },
  {
    menuItem: {
      key: "Targets",
      icon: "rocket",
      content: "Targets",
      color: "purple",
    },
    render: () => <Targets />,
  },
  {
    menuItem: {
      key: "Coming Soon",
      icon: "osi",
      content: "Coming Soon",
      color: "yellow",
    },
    render: () => <ComingSoon />,
  },
];

export const renderPage = (urlData: string) => {
  return urlData === "ajo" ? (
    <Ajo />
  ) : urlData === "safelock" ? (
    <Safelock />
  ) : urlData === "bizzbank" ? (
    <BizzBank />
  ) : urlData === "targets" ? (
    <Targets />
  ) : urlData === "soon" ? (
    <ComingSoon />
  ) : (
    ""
  );
};
