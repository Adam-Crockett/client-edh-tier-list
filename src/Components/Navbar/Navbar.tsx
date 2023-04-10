import { NavbarProps } from '../../interfaces';

import styles from './Navbar.module.css';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import SortIcon from '@mui/icons-material/Sort';
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const Navbar = ({
  handleOnClickSetEdit,
  setResetState,
  resetState,
  handleAddTierLevel,
  handleOnClickExport,
  selectedCodes
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
        <div
          className={
            selectedCodes.length === 0
              ? styles.bouncingArrow
              : styles.hiddenArrow
          }
        >
          <ArrowForwardIcon fontSize="large" />
        </div>
        <button
          className={
            selectedCodes.length === 0 ? styles.glowingButton : undefined
          }
          onClick={handleOnClickSetEdit}
          title="Select Sets"
        >
          <SortIcon />
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
