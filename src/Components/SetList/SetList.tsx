import { MultiselectSets } from '../../Components';
import { SetListProps } from '../../interfaces';
import Close from '@mui/icons-material/Close';
import styles from './SetList.module.css';

export const SetList = ({
  sets,
  selectedCodes,
  onMultiselectChange,
  handleOnClickSetEdit,
  loading
}: SetListProps) => {
  if (loading) {
    return (
      <div>
        <p>Fetching Sets</p>
      </div>
    );
  } else {
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
  }
};
