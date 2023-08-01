import styled from "styled-components";
import Chip from "../../reusable/Chip";
import { ChipsRow, SlideTitle } from "../../reusable/Styled-Components";

const CTSSlide = () => {
  return (
    <SlideWrapper>
      <Image />
      <SlideRight>
        <SlideTitle>Cross The Sea</SlideTitle>
        <ChipsRow>
          <Chip content="Game Design" />
          <Chip content="Level Design" />
          <Chip content="Quest Design" />
        </ChipsRow>
      </SlideRight>
    </SlideWrapper>
  );
};

export default CTSSlide;

const SlideWrapper = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 20px;
  width: 100%;
  position: relative;
`;

const SlideRight = styled.div``;

const Image = styled.div`
  background-color: #4831d4;
  width: 400px;
  border-radius: ${(props) => props.theme.other.borderRadius};
  height: 300px;
`;
