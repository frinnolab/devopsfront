import { useState } from "react";
import styled from "styled-components";

const colors = {
    primary: '#0C0C0C',
    secondary: '#13161C',
    text: '#fff',
    button: 'tomato'
}

export function Create() {
  const { name, setName, email, setEmail, phoneNumber, setPhoneNumber } =
    useHook();

  return (
    <MainContainer>
      <Form>
        <h1>CREATE</h1>
        <Input
          type="text"
          placeholder="enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="text"
          placeholder="enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="text"
          placeholder="enter phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <Input type="file" accept="image/png, image/jpeg" />
        <Button>Create</Button>
      </Form>
    </MainContainer>
  );
}

const useHook = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  return { name, setName, email, setEmail, phoneNumber, setPhoneNumber };
};

const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${colors.primary};
  color: ${colors.text};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background-color: ${colors.secondary};
  padding: 20px 15px;
  border-radius: 10px;
`;

const Form = styled.form`
  width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Button = styled.button`
    border: none;
    outline: none;
    width: 100%;
    padding: 20px 25px;
    font-weight: bold;
    background-color: ${colors.button};
    color: ${colors.text};
    border-radius: 10px;
`