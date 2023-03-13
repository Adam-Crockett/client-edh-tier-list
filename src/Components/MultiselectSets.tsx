import { MultiselectSetsProps } from '../interfaces';

const MultiselectSets = ({
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
  return (
    <div>
      {options.map((option) => (
        <img
          key={option.id}
          src={option.src}
          alt={option.name}
          title={option.name}
          onClick={() => handleOptionClick(option.code)}
          style={{
            width: 50,
            height: 50,
            opacity: selectedCodes.includes(option.code) ? 0.5 : 1
          }}
        />
      ))}
    </div>
  );
};

export default MultiselectSets;
