import { ReactNode } from "react";
import { CollectionButton } from "../styles/styledComponents";

const ListButton = ({ children, handleListVisibility }: Props) => {
  return (
    <CollectionButton onClick={handleListVisibility}>
      {children}
    </CollectionButton>
  );
};

interface Props {
  children: ReactNode;
  handleListVisibility: () => void;
}

export default ListButton;
