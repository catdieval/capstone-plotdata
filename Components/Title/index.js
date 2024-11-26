import styled from "styled-components";
import Image from "next/image";
import logoImage from "../../assets/plotdata-logo.png";
import Button from "../Button";
import { useRouter } from "next/router";
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
  const router = useRouter();
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
          <Button $variant="login" onClick={() => router.push("/SignInForm")}>
            Login
          </Button>
        </Container>
      </StyledTitle>
    </>
  );
}
