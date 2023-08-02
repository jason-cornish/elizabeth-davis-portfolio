import styled from "styled-components";

export const SlideTitle = styled.div`
  color: ${(props) => props.theme.colors.primaryBlack};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const ChipsRow = styled.div`
  display: flex;
  column-gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  row-gap: 5px;
`;
