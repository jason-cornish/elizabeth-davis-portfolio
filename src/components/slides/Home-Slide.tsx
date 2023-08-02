import styled from "styled-components";
import Chip from "../../reusable/Chip";
import { ChipsRow, SlideTitle } from "../../reusable/Styled-Components";

const HomeSlide = () => {
  return (
    <SlideWrapper>
      <Image />
      <SlideRight>
        <SlideTitle>Elizabeth Davis</SlideTitle>
        <ChipsRow>
          <Chip content="Game Design" />
        </ChipsRow>
      </SlideRight>
    </SlideWrapper>
  );
};

export default HomeSlide;

const SlideWrapper = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 20px;
  width: 100%;
`;

const SlideRight = styled.div`
  width: 35%;
`;

const Image = styled.div`
  background-color: ${(props) => props.theme.colors.highlight1};
  width: 65%;
  border-radius: ${(props) => props.theme.other.borderRadius};
  height: 400px;
`;
