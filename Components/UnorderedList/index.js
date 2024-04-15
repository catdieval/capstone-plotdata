export default function UnorderedList($arrayOfBulletPoints) {
  return (
    <ul>
      {$arrayOfBulletPoints.map((bulletPoint) => (
        <li key={bulletPoint}>{bulletPoint}</li>
      ))}
    </ul>
  );
}
