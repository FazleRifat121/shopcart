import { FC } from "react";

interface SideBarMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideBarMenu: FC<SideBarMenuProps> = ({ isOpen, onClose }) => {
  return <div>SideBarMenu</div>;
};

export default SideBarMenu;
