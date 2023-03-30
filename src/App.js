import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Themes";
import { useState } from "react";
import AllCountries from "./pages/AllCountries";
import NoPage from "./pages/NoPage";
import CountryDetail from "./pages/CountryDetails";
import useFetch from "./hooks/useFetch";
import LoadingSpinner from "./components/LoadingSpinner";

const Container = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  min-height: 100vh;
`;

const StyledContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  padding: 0 100px;

  @media only screen and (max-width: 600px) {
    padding: 0 20px;
  }
`;

const Error = styled.div`
  color: red;
  font-size: 30px;
  font-weight: 800;
  display: flex;
  justify-content: center;
`;

//vo filter button by som rád vedieť ako spravím transition na tú šípku
//slide pri zatvorení šípky no way, nemám už potuchy

function App() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const { data, errorMessage, isLoading } = useFetch(
    "https://restcountries.com/v3.1/all?fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags,cca3"
  );

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <GlobalStyles />
          <Container>
            <Header themeToggler={themeToggler} />
            <StyledContainer>
              <Routes>
                <Route path="/" element={<AllCountries data={data} />}></Route>
                <Route
                  path="/AllCountries/:id"
                  element={<CountryDetail data={data} />}
                ></Route>
                <Route path="*" element={<NoPage />}></Route>
              </Routes>
            </StyledContainer>
          </Container>
        </>
      )}
      {errorMessage && <Error>{errorMessage}</Error>}
    </ThemeProvider>
  );
}

export default App;
