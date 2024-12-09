import React from "react";
import {
  GridItem,
  GridMain,
  GridSection,
  GridSection2,
  GridSection3,
  GridSection4,
} from "./style";

function GridBox() {
  const GridItemBox = Array.from({ length: 14 });
  return (
    <GridMain>
      <div>
        <GridSection>
          {GridItemBox.map((_, index) => {
            return <GridItem key={index}>Slot</GridItem>;
          })}
        </GridSection>
        <GridSection2>
          {GridItemBox.map((_, index) => {
            return <GridItem key={index}>Slot</GridItem>;
          })}
        </GridSection2>
        <GridSection3>
          {GridItemBox.map((_, index) => {
            return <GridItem key={index}>Slot</GridItem>;
          })}
        </GridSection3>
        <GridSection4>
          {GridItemBox.map((_, index) => {
            return <GridItem key={index}>Slot</GridItem>;
          })}
        </GridSection4>
      </div>
    </GridMain>
  );
}

export default GridBox;
