import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Body from "./components/Body";
import Header from "./components/Header";

const Global = createGlobalStyle`
  body {
    font-family: 'Nunito Sans', sans-serif;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  background-color: hsl(207, 26%, 17%);
  color: hsl(0, 0%, 100%);
`;

function App() {
  return (
    <Container>
      <Global />
      <Header />
      <Body />
    </Container>
  );
}

export default App;
