import MultiselectSets from './MultiselectSets';

interface SetData {
  id: number;
  src: string;
  name: string;
  code: string;
  releaseDate: Date;
}

interface SetListProps {
  sets: SetData[] | null;
  selectedCodes: string[];
  onMultiselectChange: (selectedCodes: string[]) => void;
}

const SetList = ({
  sets,
  selectedCodes,
  onMultiselectChange
}: SetListProps) => {
  return (
    <div>
      {sets === null ? (
        <p>Loading Data...</p>
      ) : (
        <MultiselectSets
          options={sets}
          selectedCodes={selectedCodes}
          onChange={onMultiselectChange}
        ></MultiselectSets>
      )}
    </div>
  );
};

export default SetList;
