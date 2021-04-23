export interface NavbarProps {
  setMobile: React.Dispatch<React.SetStateAction<boolean>>;
  mobile: boolean;
  title: string;
}

export interface SidebarTypes {
  mobile: boolean;
}
