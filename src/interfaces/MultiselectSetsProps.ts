export interface MultiselectSetsProps {
  options: Options[];
  selectedCodes: string[];
  onChange: (selectedCodes: string[]) => void;
}

interface Options {
  id: string;
  src: string;
  name: string;
  code: string;
}
