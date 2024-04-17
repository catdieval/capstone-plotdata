import { Container } from "../Container";

export default function UnorderedList({ $arrayOfBulletPoints }) {
  return (
    <ul>
      <Container $direction="column" $gap>
        {$arrayOfBulletPoints.map((bulletPoint) => {
          return <li key={bulletPoint}>{bulletPoint}</li>;
        })}
      </Container>
    </ul>
  );
}
