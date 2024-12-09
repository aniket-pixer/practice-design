import { Typography } from "@/styles/typography";
import styled from "styled-components";

const GridMain = styled.div`
  display: flex;
  padding: 160px;
  gap: 32px;
  div {
    width: 100%;
  }
`;

const GridSection = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 32px;
  grid-row-gap: 32px;
  margin-bottom: 80px;
`;

const GridSection2 = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 32px;
  grid-row-gap: 32px;
  margin-bottom: 80px;
`;

const GridSection3 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-column-gap: 32px;
  grid-row-gap: 32px;
  margin-bottom: 80px;
`;

const GridSection4 = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(12, 1fr);
  grid-column-gap: 32px;
  grid-row-gap: 32px;
`;

const GridItem = styled.div`
  height: 120px;
  background: var(--ambient-1);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Typography.body_md_semibold}
`;

export {
  GridSection,
  GridItem,
  GridSection2,
  GridSection3,
  GridSection4,
  GridMain,
};
