import React from "react";
import { StyleDuration, StyleDuration2, TegItem, TegList } from "./style";

const AnimationSection = () => {
  const AnimationArray = Array.from({ length: 40 });
  return (
    <TegList>
      <StyleDuration2 className="loop-slider">
        <div className="inner">
          {AnimationArray.map((_, index) => {
            return (
              <TegItem key={index}>
                <span>#</span> Gatsby
              </TegItem>
            );
          })}
        </div>
      </StyleDuration2>
      <StyleDuration className="loop-slider">
        <div className="inner">
          <TegItem>
            <span>#</span> Next.js
          </TegItem>
          <TegItem>
            <span>#</span> React
          </TegItem>
          <TegItem>
            <span>#</span> webdev
          </TegItem>
          <TegItem>
            <span>#</span> Typescript
          </TegItem>
          <TegItem>
            <span>#</span> Gatsby
          </TegItem>
          <TegItem>
            <span>#</span> Next.js
          </TegItem>
          <TegItem>
            <span>#</span> React
          </TegItem>
          <TegItem>
            <span>#</span> webdev
          </TegItem>
          <TegItem>
            <span>#</span> Typescript
          </TegItem>
          <TegItem>
            <span>#</span> Gatsby
          </TegItem>
          <TegItem>
            <span>#</span> Next.js
          </TegItem>
          <TegItem>
            <span>#</span> React
          </TegItem>
          <TegItem>
            <span>#</span> webdev
          </TegItem>
          <TegItem>
            <span>#</span> Typescript
          </TegItem>
          <TegItem>
            <span>#</span> Gatsby
          </TegItem>
          <TegItem>
            <span>#</span> Next.js
          </TegItem>
          <TegItem>
            <span>#</span> React
          </TegItem>
          <TegItem>
            <span>#</span> webdev
          </TegItem>
          <TegItem>
            <span>#</span> Typescript
          </TegItem>
          <TegItem>
            <span>#</span> Gatsby
          </TegItem>
          {/* <!-- duplicated content --> */}
          <TegItem>
            <span>#</span> Next.js
          </TegItem>
          <TegItem>
            <span>#</span> React
          </TegItem>
          <TegItem>
            <span>#</span> webdev
          </TegItem>
          <TegItem>
            <span>#</span> Typescript
          </TegItem>
          <TegItem>
            <span>#</span> Gatsby
          </TegItem>
          <TegItem>
            <span>#</span> Next.js
          </TegItem>
          <TegItem>
            <span>#</span> React
          </TegItem>
          <TegItem>
            <span>#</span> webdev
          </TegItem>
          <TegItem>
            <span>#</span> Typescript
          </TegItem>
          <TegItem>
            <span>#</span> Gatsby
          </TegItem>
          <TegItem>
            <span>#</span> Next.js
          </TegItem>
          <TegItem>
            <span>#</span> React
          </TegItem>
          <TegItem>
            <span>#</span> webdev
          </TegItem>
          <TegItem>
            <span>#</span> Typescript
          </TegItem>
          <TegItem>
            <span>#</span> Gatsby
          </TegItem>
          <TegItem>
            <span>#</span> Next.js
          </TegItem>
          <TegItem>
            <span>#</span> React
          </TegItem>
          <TegItem>
            <span>#</span> webdev
          </TegItem>
          <TegItem>
            <span>#</span> Typescript
          </TegItem>
          <TegItem>
            <span>#</span> Gatsby
          </TegItem>
        </div>
      </StyleDuration>
    </TegList>
    // </div>
  );
};

export default AnimationSection;
