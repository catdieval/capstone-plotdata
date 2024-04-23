import Container from "../Container";
import styled from "styled-components";

export default function UnorderedList({ $arrayOfBulletPoints }) {
  const StyledLi = styled.li`
    font-size: 1.1rem;
  `;

  return (
    <ul>
      <Container $direction="column" $gap>
        {$arrayOfBulletPoints.map((bulletPoint) => {
          return <StyledLi key={bulletPoint}>{bulletPoint}</StyledLi>;
        })}
      </Container>
    </ul>
  );
}
