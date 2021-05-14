import { Ajo, BizzBank, Connections, Safelock } from "./Components";

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
    menuItem: {
      key: "Safelock",
      icon: "lock",
      content: "Safelock",
      color: "green",
    },
    render: () => <Safelock />,
  },
  {
    menuItem: { key: "Ajo", icon: "save", content: "Ajo", color: "pink" },
    render: () => <Ajo />,
  },
  {
    menuItem: {
      key: "Connections",
      icon: "plug",
      content: "Connections",
      color: "yellow",
    },
    render: () => <Connections />,
  },
];

export const renderPage = (urlData: string) => {
  return urlData === "ajo" ? (
    <Ajo />
  ) : urlData === "safelock" ? (
    <Safelock />
  ) : urlData === "bizzbank" ? (
    <BizzBank />
  ) : urlData === "connections" ? (
    <Connections />
  ) : (
    ""
  );
};
