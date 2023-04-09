import { MultiselectSetsProps } from '../../interfaces';
import styles from './MultiselectSets.module.css';

export const MultiselectSets = ({
  options,
  selectedCodes,
  onChange
}: MultiselectSetsProps) => {
  const handleOptionClick = (code: string) => {
    const newSelectedCodes = selectedCodes.includes(code)
      ? selectedCodes.filter((selectedCode) => selectedCode !== code)
      : [...selectedCodes, code];
    onChange(newSelectedCodes);
  };
  const selectedColor =
    'invert(72%) sepia(61%) saturate(413%) hue-rotate(343deg) brightness(99%) contrast(88%)';
  const unselectedColor =
    'invert(97%) sepia(98%) saturate(512%) hue-rotate(62deg) brightness(80%) contrast(94%)';

  const optionsArray = Array.isArray(options) ? options : [];
  return (
    <div className={styles.container}>
      {optionsArray.map((option) => (
        <img
          className={styles.setImage}
          key={option.id}
          src={option.src}
          alt={option.name}
          title={option.name}
          onClick={() => handleOptionClick(option.code)}
          style={{
            filter: selectedCodes.includes(option.code)
              ? selectedColor
              : unselectedColor
          }}
        />
      ))}
    </div>
  );
};
