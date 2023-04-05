import { NavbarProps } from '../../interfaces';

import styles from './Navbar.module.css';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import FilterListIcon from '@mui/icons-material/FilterList';

export const Navbar = ({
  handleOnClickSetEdit,
  setResetState,
  resetState,
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
        <button onClick={handleOnClickSetEdit}>
          <FilterListIcon />
        </button>
        <button onClick={handleOnClickReset}>
          <DeleteOutlineIcon />
        </button>
        <button onClick={handleOnClickExport}>
          <FileDownloadIcon />
        </button>
      </div>
    </div>
  );
};
