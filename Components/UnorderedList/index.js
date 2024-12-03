import Container from "../Container";
import styled from "styled-components";

export default function UnorderedList({ $arrayOfBulletPoints }) {
  return (
    <ul>
      <Container $direction="column" $gap>
        {$arrayOfBulletPoints.map((bulletPoint) => {
          return (
            <StyledListItem key={bulletPoint}>{bulletPoint}</StyledListItem>
          );
        })}
      </Container>
    </ul>
  );
}

const StyledListItem = styled.li`
  font-size: 1.1rem;
`;
