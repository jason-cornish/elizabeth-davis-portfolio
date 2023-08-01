import styled from "styled-components";
import HomeSlide from "./slides/Home-Slide";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CTSSlide from "./slides/CTS-Slide";
import QuestSlide from "./slides/Quest-Slide";
import { useRef } from "react";
import { useEffect } from "react";

const Slider = (props: any) => {
  const { selectedSlide, setSelectedSlide, slidesPercentageMapping, slides } =
    props;
  const sliderRef: any = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(${slidesPercentageMapping[selectedSlide]}%)`;
    }
  }, [selectedSlide, slidesPercentageMapping, sliderRef]);

  const slideForward = () => {
    const current = slides.indexOf(selectedSlide);
    const nextSlide =
      current === slides.length - 1 ? slides[0] : slides[current + 1];
    setSelectedSlide(nextSlide);
  };

  const slideBackward = () => {
    const current = slides.indexOf(selectedSlide);
    const nextSlide =
      current === 0 ? slides[slides.length - 1] : slides[current - 1];
    setSelectedSlide(nextSlide);
  };

  return (
    <SliderWrapper>
      <ArrowBackIosNewIcon
        fontSize="large"
        className="arrow-left"
        onClick={slideBackward}
      />
      <SliderContent>
        <InnerSlider ref={sliderRef}>
          <HomeSlide />
          <CTSSlide />
          <QuestSlide />
        </InnerSlider>
      </SliderContent>
      <ArrowForwardIosIcon
        fontSize="large"
        className="arrow-right"
        onClick={slideForward}
      />
    </SliderWrapper>
  );
};

export default Slider;

const SliderWrapper = styled.div`
  display: flex;
  padding-top: 15vh;
  box-sizing: border-box;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.primaryWhite};
  .arrow-left {
    position: absolute;
    top: 40%;
    left: 2.5%;
    cursor: pointer;
  }
  .arrow-right {
    position: absolute;
    top: 40%;
    right: 2.5%;
    cursor: pointer;
  }
  overflow: hidden;
`;

const SliderContent = styled.div`
  width: 80%;
  overflow: hidden;
`;

const InnerSlider = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(3, 100%);
  width: 100%;
  position: relative;
  box-sizing: border-box;
  transition: transform 0.7s ease-in-out;
  /* animation: slider 5s ease-in-out infinite alternate; */

  /* @keyframes slider {
    0% {
      transform: translateX(0%);
    }
    50% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(-200%);
    }
  } */
`;
