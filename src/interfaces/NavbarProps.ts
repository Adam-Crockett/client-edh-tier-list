export interface NavbarProps {
  handleOnClickSetEdit: () => void;
  setResetState: React.Dispatch<React.SetStateAction<boolean>>;
  resetState: boolean;
  handleOnClickExport: () => void;
}
