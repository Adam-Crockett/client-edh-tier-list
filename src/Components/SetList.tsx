import MultiselectSets from './MultiselectSets';

interface SetListProps {
  sets: [];
  selectedIds: number[];
  onMultiselectChange: (selectedIds: number[]) => void;
}

const SetList = ({ sets, selectedIds, onMultiselectChange }: SetListProps) => {
  return (
    <div>
      {sets === null ? (
        <p>Loading Data...</p>
      ) : (
        <MultiselectSets
          options={sets}
          selectedIds={selectedIds}
          onChange={onMultiselectChange}
        ></MultiselectSets>
      )}
    </div>
  );
};

export default SetList;
