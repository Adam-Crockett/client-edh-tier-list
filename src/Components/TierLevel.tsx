const TierLevel = ({ levelData }: any) => {
  return (
    <li id={levelData.id}>
      <p>{levelData.name}</p>
    </li>
  );
};

export default TierLevel;
