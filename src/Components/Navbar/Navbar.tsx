import { NavbarProps } from '../../interfaces';

import styles from './Navbar.module.css';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import FilterListIcon from '@mui/icons-material/FilterList';
import AddIcon from '@mui/icons-material/Add';

export const Navbar = ({
  handleOnClickSetEdit,
  setResetState,
  resetState,
  handleAddTierLevel,
  handleOnClickExport
}: NavbarProps) => {
  function handleOnClickReset() {
    setResetState(!resetState);
  }
  return (
    <div className={styles.Navbar}>
      <div className={styles.logoContainer}>
        <p className={styles.siteName}>POWER LEVEL</p>
        <p className={styles.siteSubName}>An EDH Tier Tool</p>
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={handleOnClickSetEdit} title="Select Sets">
          <FilterListIcon />
        </button>
        <button onClick={handleAddTierLevel} title="Add Tier">
          <AddIcon />
        </button>
        <button onClick={handleOnClickReset} title="Reset All Data">
          <DeleteOutlineIcon />
        </button>
        <button onClick={handleOnClickExport} title="Download">
          <FileDownloadIcon />
        </button>
      </div>
    </div>
  );
};
