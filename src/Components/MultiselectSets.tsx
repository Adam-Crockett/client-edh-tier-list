interface MultiselectSetsProps {
  options: { id: number; src: string; name: string; code: string }[];
  selectedIds: number[];
  onChange: (selectedIds: number[]) => void;
}

const MultiselectSets = ({
  options,
  selectedIds,
  onChange
}: MultiselectSetsProps) => {
  const handleOptionClick = (id: number) => {
    const newSelectedIds = selectedIds.includes(id)
      ? selectedIds.filter((selectedId) => selectedId !== id)
      : [...selectedIds, id];
    onChange(newSelectedIds);
  };
  return (
    <div>
      {options.map((option) => (
        <img
          key={option.id}
          src={option.src}
          alt={option.name}
          title={option.name}
          onClick={() => handleOptionClick(option.id)}
          style={{
            width: 50,
            height: 50,
            opacity: selectedIds.includes(option.id) ? 0.5 : 1
          }}
        />
      ))}
    </div>
  );
};

export default MultiselectSets;
