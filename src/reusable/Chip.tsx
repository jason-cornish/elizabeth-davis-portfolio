import styled from "styled-components";

type ChipProps = {
  content: string;
};

const Chip = (props: ChipProps) => {
  const { content } = props;

  return (
    <ChipWrapper>
      <p>{content}</p>
    </ChipWrapper>
  );
};

export default Chip;

const ChipWrapper = styled.div`
  background-color: transparent;
  border: 2px solid ${(props) => props.theme.colors.primaryBlack};
  border-radius: 40px;
  padding: 5px 10px;
  p {
    font-family: Archivo;
    color: ${(props) => props.theme.colors.primaryBlack};
    font-size: 16px;
    margin: 0px !important;
  }
`;
