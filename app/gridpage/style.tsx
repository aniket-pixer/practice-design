import styled from "styled-components";

const GridPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const GridSectionWrapper = styled.div`
  grid-template-columns: repeat(4, 1fr);
  grid-column: 1 / 5;
  display: grid;
  grid-gap: 10px;
`;

const GridCardSection1 = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  align-content: end;
  padding: 12px;
  .item1 {
    grid-column: 1 / 5;
  }
`;

const GridCardSection2 = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  background-color: #fff;
  color: #444;
  padding: 12px;
  .a {
    grid-column: 1 / span 2;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
  }
  .b {
    grid-column: 3;
    grid-row: 1 / span 2;
    border: 1px solid #eaecf0;
    border-radius: 8px;
    box-shadow: 0px 0.59px 1.19px 0px #1018280d;
  }
  .c {
    grid-column: 1 / span 2;
    background-color: var(--red);
    height: 300px;
    border-radius: 8px;
  }
`;

const GridCardSectionBox = styled.div``;

export {
  GridSectionWrapper,
  GridPageWrapper,
  GridCardSection2,
  GridCardSectionBox,
  GridCardSection1,
};
