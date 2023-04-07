export interface NavbarProps {
  handleOnClickSetEdit: () => void;
  setResetState: React.Dispatch<React.SetStateAction<boolean>>;
  resetState: boolean;
  handleAddTierLevel: () => void;
  handleOnClickExport: () => void;
  selectedCodes: string[];
}
