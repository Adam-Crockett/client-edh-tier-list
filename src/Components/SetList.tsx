import MultiselectSets from './MultiselectSets';
import { SetListProps } from '../interfaces';

const SetList = ({
  sets,
  selectedCodes,
  onMultiselectChange,
  handleOnClickSetEdit
}: SetListProps) => {
  return (
    <div
      style={{
        position: 'fixed',
        backgroundColor: 'white',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 9999
      }}
    >
      {sets === null ? (
        <p>Loading Data...</p>
      ) : (
        <MultiselectSets
          options={sets}
          selectedCodes={selectedCodes}
          onChange={onMultiselectChange}
        />
      )}
      <button onClick={handleOnClickSetEdit}>Close</button>
    </div>
  );
};

export default SetList;
