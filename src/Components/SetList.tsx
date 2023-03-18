import MultiselectSets from './MultiselectSets';
import { SetListProps } from '../interfaces';

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
        />
      )}
    </div>
  );
};

export default SetList;
