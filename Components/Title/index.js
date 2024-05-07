import styled from "styled-components";
import Image from "next/image";
import logoImage from "../../assets/plotdata-logo.png";
import SingInForm from "../SignInForm";
import Container from "../Container";

const StyledTitle = styled.section`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  margin: 0;
  padding: 10px;
`;

export default function Title() {
  return (
    <>
      <StyledTitle>
        <Container $centered="center">
          <Image
            src={logoImage}
            alt={"plotdata-logo"}
            width={300}
            height={74}
          />
          <SingInForm />
        </Container>
      </StyledTitle>
    </>
  );
}
