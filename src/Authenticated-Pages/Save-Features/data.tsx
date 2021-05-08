import { Ajo, BizzBank, ComingSoon, Safelock, Targets } from "./Components";

export const panes = [
  {
    menuItem: {
      key: "Bizz Bank",
      icon: "th",
      content: "Bizz Bank",
    },
    render: () => <BizzBank />,
  },
  {
    menuItem: { key: "Ajo", icon: "save", content: "Ajo" },
    render: () => <Ajo />,
  },
  {
    menuItem: { key: "Safelock", icon: "lock", content: "Safelock" },
    render: () => <Safelock />,
  },
  {
    menuItem: { key: "Targets", icon: "rocket", content: "Targets" },
    render: () => <Targets />,
  },
  {
    menuItem: { key: "Coming Soon", icon: "osi", content: "Coming Soon" },
    render: () => <ComingSoon />,
  },
];
