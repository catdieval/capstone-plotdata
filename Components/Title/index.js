import styled from "styled-components";
import Image from "next/image";
import logoImage from "../../assets/plotdata-logo.png";
import SingInForm from "../SignInForm";

const StyledTitle = styled.section`
  position: fixed;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  margin: 0;
  padding: 10px;
`;

const StyledSignIn = styled.div`
  position: absolute;
  top: 5;
  right: 20;
`;

export default function Title() {
  return (
    <>
      <StyledTitle>
        <Image src={logoImage} alt={"plotdata-logo"} width={300} height={74} />
      </StyledTitle>
      <StyledSignIn>
        <SingInForm />
      </StyledSignIn>
    </>
  );
}
