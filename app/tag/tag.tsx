import React, { useState } from "react";
import TagSection from "@/components/tagSection";
import { TagWrapper } from "./style";

const Tag = () => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
  };

  const handleTagClick = () => {
    alert("Tag clicked!");
  };

  return (
    <div>
      <h1>Custom Tag Component</h1>
      <TagWrapper>
        {visible && (
          <TagSection
            color="#52c41a"
            closable
            onClose={handleClose}
            icon={"stripe-icon"}
            onClick={handleTagClick}
          >
            Clickable Tag with Icon
          </TagSection>
        )}

        <TagSection size="small" onClick={() => alert("Small tag clicked!")}>
          Small Clickable Tag
        </TagSection>

        <TagSection
          size="large"
          color="#fa541c"
          closable
          onClose={() => alert("Closed!")}
        >
          Large Closable Tag
        </TagSection>

        <TagSection>Small Clickable Tag</TagSection>
      </TagWrapper>
    </div>
  );
};

export default Tag;
