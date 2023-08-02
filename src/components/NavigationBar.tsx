import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";

const NavigationBar = (props: any) => {
  const { setSelectedSlide, selectedSlide } = props;
  const slideIconMapping: any = {
    home: <HomeIcon sx={{ color: "#e0e3e7", fontSize: 45 }} />,
    cts: <HomeIcon sx={{ color: "#e0e3e7", fontSize: 45 }} />,
    quest: <HomeIcon sx={{ color: "#e0e3e7", fontSize: 45 }} />,
  };

  const handleSlideSelection = (slide: string) => {
    console.log(slide);
    setSelectedSlide(slide);
  };

  return (
    <NavBar>
      {Object.keys(slideIconMapping).map((slide: string) => {
        return (
          <SlideIcon
            key={`${slide}-icon`}
            onClick={() => handleSlideSelection(slide)}
            className={`${selectedSlide === slide ? "active" : "inactive"}`}
          >
            {slideIconMapping[slide]}
          </SlideIcon>
        );
      })}
    </NavBar>
  );
};

export default NavigationBar;

const NavBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 10vh;
  background-color: ${(props) => props.theme.colors.primaryWhite};
  width: 100%;
  height: 7rem;
  column-gap: 2rem;

  .active {
    transform: scale(1.3);
    opacity: 1;
  }

  .inactive {
    transform: scale(1);
    opacity: 0.5;
    :hover {
      opacity: 1;
    }
  }
`;

// const SelectedSlideIcon = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 7rem;
//   height: 7rem;
//   background-color: ${(props) => props.theme.colors.highlight1};
//   border-radius: ${(props) => props.theme.other.borderRadius};
//   cursor: pointer;
// `;

const SlideIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 5rem;
  transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
  /* transition: opacity 0.2s ease-in-out; */
  background-color: ${(props) => props.theme.colors.highlight1};
  border-radius: ${(props) => props.theme.other.borderRadius};
  cursor: pointer;
`;
