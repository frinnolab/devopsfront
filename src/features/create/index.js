import { useState } from "react";
import styled from "styled-components";

export function Create() {
    const {name, setName,email, setEmail, phoneNumber, setPhoneNumber} = useHook()
  return (
    <MainContainer>
      <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <Input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      <Input type="image" />
    </MainContainer>
  );
}

const useHook = () => {
  const [name, setName] = useState("name");
  const [email, setEmail] = useState("email");
  const [phoneNumber, setPhoneNumber] = useState("phone");

  return { name, setName,email, setEmail, phoneNumber, setPhoneNumber  };
};

const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  border: none;
  outline: none;
  margin-top: 10px;
  background-color: tomato;
  padding: 20px 15px;
`;
