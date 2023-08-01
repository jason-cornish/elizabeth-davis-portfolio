import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import Slider from "./components/Slider";
import NavigationBar from "./components/NavigationBar";
import { useState } from "react";

const theme = {
  colors: {
    primaryWhite: "#e0e3e7",
    primaryBlack: "#282828",
    highlight1: "#1b1236",
  },
  fonts: {
    header: "Roboto",
    body: "Archivo",
  },
  other: {
    borderRadius: "3px",
  },
};

function App() {
  const [selectedSlide, setSelectedSlide] = useState("home");

  const slidesPercentageMapping = {
    home: 0,
    cts: -100,
    quest: -200,
  };

  const slides = ["home", "cts", "quest"];

  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <Slider
          slides={slides}
          selectedSlide={selectedSlide}
          setSelectedSlide={setSelectedSlide}
          slidesPercentageMapping={slidesPercentageMapping}
        />
        <NavigationBar
          slides={slides}
          selectedSlide={selectedSlide}
          setSelectedSlide={setSelectedSlide}
        />
      </AppWrapper>
    </ThemeProvider>
  );
}

const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

export default App;
