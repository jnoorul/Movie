import styled from "styled-components";

const Container = styled.div`
  color: white;
  background-color: blue;
  display: flex;
  flex-direction: row;
`;

const Title = styled.h3`
  flex: 2;
`;

const Login = styled.button`
  background-color: blue;
  border: 0;
  flex: 0.4;
`;

const FreeTrial = styled.button`
  background-color: grey;
  flex: 0.4;
`;

export function Header() {
  return (
    <Container>
      <Title>DEMO Streaming</Title>
      <Login>Log in</Login>
      <FreeTrial>Start your free trial</FreeTrial>
    </Container>
  );
}
