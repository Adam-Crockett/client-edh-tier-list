import React from 'react';
import styles from './Navbar.module.css';

const Navbar = ({ handleOnClickSetEdit, setResetState, resetState }: any) => {
  function handleOnClickReset() {
    setResetState(!resetState);
  }
  return (
    <div className={styles.Navbar}>
      <div className={styles.imageContainer}>
        <img
          className={styles.logoImage}
          src="https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/7/70/ONE_expansion_symbol.png"
        />
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={handleOnClickSetEdit}>
          <span>Sets</span>
        </button>
        <button onClick={handleOnClickReset}>
          <span>Reset</span>
        </button>
        <button>
          <span>Export</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
