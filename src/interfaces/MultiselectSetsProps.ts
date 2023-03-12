export interface MultiselectSetsProps {
  options: { id: number; src: string; name: string; code: string }[];
  selectedCodes: string[];
  onChange: (selectedCodes: string[]) => void;
}
