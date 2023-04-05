import { MultiselectSets } from '../../components';
import { SetListProps } from '../../interfaces';
import Close from '@mui/icons-material/Close';
import styles from './SetList.module.css';

export const SetList = ({
  sets,
  selectedCodes,
  onMultiselectChange,
  handleOnClickSetEdit
}: SetListProps) => {
  return (
    <div className={styles.container}>
      {sets && (
        <div className={styles.setListWrapper}>
          <MultiselectSets
            options={sets}
            selectedCodes={selectedCodes}
            onChange={onMultiselectChange}
          />
        </div>
      )}
      <button onClick={handleOnClickSetEdit}>
        <Close />
      </button>
    </div>
  );
};
