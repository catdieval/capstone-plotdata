import { useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import Button from "../../Components/Button";
import styled from "styled-components";

export default function SingInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  async function submitHandler(event) {
    event.preventDefault();

    try {
      const result = await signIn("credentials", {
        email: email,
        password: password,
        redirect: false,
      });

      if (result.error) {
        setError("Ungültige Anmeldedaten");
        return;
      } else router.replace("/profile");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section>
      <StyledAuthForm onSubmit={submitHandler}>
        <StyledAuthField>
          <StyledAuthLabel htmlFor="email">E-Mail:</StyledAuthLabel>
          <StyledAuthInput
            type="email"
            id="email"
            required
            onChange={(event) => setEmail(event.target.value)}
          />
        </StyledAuthField>
        <StyledAuthField>
          <StyledAuthLabel htmlFor="password">Passwort:</StyledAuthLabel>
          <StyledAuthInput
            type="password"
            id="password"
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </StyledAuthField>
        <div>
          <Button $variant="login">Login</Button>
        </div>
        {error && <StyledError>{error}</StyledError>}
      </StyledAuthForm>
    </section>
  );
}

export const StyledAuthForm = styled.form`
  margin: 3rem auto;
  width: 100%;
  border-radius: 6px;
  background-color: var(--color-background-text);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
  padding: 1rem;
  text-align: center;
`;

export const StyledAuthField = styled.div`
  margin-bottom: 0.5rem;
`;

export const StyledAuthLabel = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const StyledAuthInput = styled.input`
  font: inherit;
  color: #38015c;
  border-radius: 4px;
  border: 1px solid white;
  width: 100%;
  text-align: left;
  padding: 0.25rem;
`;

export const StyledError = styled.div`
  background-color: red;
  color: white;
  border-radius: 4px;
  padding: 10px;
  margin: 10px;
`;
