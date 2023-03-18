export interface MultiselectSetsProps {
  options: { id: string; src: string; name: string; code: string }[];
  selectedCodes: string[];
  onChange: (selectedCodes: string[]) => void;
}
