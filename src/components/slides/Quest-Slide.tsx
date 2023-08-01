import styled from "styled-components";
import Chip from "../../reusable/Chip";
import { ChipsRow, SlideTitle } from "../../reusable/Styled-Components";

const QuestSlide = () => {
  return (
    <SlideWrapper>
      <Image />
      <SlideRight>
        <SlideTitle>Quest Slide</SlideTitle>
        <ChipsRow>
          <Chip content="Quest Design" />
        </ChipsRow>
      </SlideRight>
    </SlideWrapper>
  );
};

export default QuestSlide;

const SlideWrapper = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 20px;
  position: relative;
  width: 100%;
`;

const SlideRight = styled.div``;

const Image = styled.div`
  background-color: #ccf381;
  width: 400px;
  border-radius: ${(props) => props.theme.other.borderRadius};
  height: 300px;
`;
