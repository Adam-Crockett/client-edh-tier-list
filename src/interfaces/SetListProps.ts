import { SetData } from '../interfaces';
export interface SetListProps {
  sets: SetData[] | null;
  selectedCodes: string[];
  onMultiselectChange: (selectedCodes: string[]) => void;
  handleOnClickSetEdit: () => void;
}
