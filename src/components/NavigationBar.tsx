import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";

const NavigationBar = (props: any) => {
  const slideIconMapping: any = {
    home: <HomeIcon sx={{ color: "#e0e3e7", fontSize: 45 }} />,
    cts: <HomeIcon sx={{ color: "#e0e3e7", fontSize: 45 }} />,
    quest: <HomeIcon sx={{ color: "#e0e3e7", fontSize: 45 }} />,
  };

  return (
    <NavBar>
      {Object.keys(slideIconMapping).map((slide) => {
        return <SlideIcon>{slideIconMapping[slide]}</SlideIcon>;
      })}
    </NavBar>
  );
};

export default NavigationBar;

const NavBar = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 5vh;
  background-color: ${(props) => props.theme.colors.primaryWhite};
  width: 100%;
  column-gap: 2rem;
`;

const SlideIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 5rem;
  background-color: ${(props) => props.theme.colors.highlight1};
  border-radius: ${(props) => props.theme.other.borderRadius};
`;
