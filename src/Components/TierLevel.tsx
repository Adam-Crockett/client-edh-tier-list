const TierLevel = ({ index, levelData, handleRemoveTierLevel }: any) => {
  const handleRemoveClick = () => {
    handleRemoveTierLevel(index);
  };
  return (
    <li>
      <button onClick={handleRemoveClick}>Remove tier level</button>
      <p>{levelData.name}</p>
    </li>
  );
};

export default TierLevel;
