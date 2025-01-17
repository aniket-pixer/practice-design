import React from "react";
import { CloseIcon, IconWrapper, TagWrapper } from "./style";

interface TagProps {
  color?: string; // Optional color for the tag
  closable?: boolean; // Determines if the tag has a close button
  size?: "small" | "default" | "large"; // Size options for the tag
  onClose?: () => void; // Callback function when the close button is clicked
  onClick?: () => void; // Callback function when the tag is clicked
  icon?: React.ReactNode; // Optional icon to display inside the tag
  children: React.ReactNode; // Content of the tag
}

const TagSection: React.FC<TagProps> = ({
  color,
  closable = false, // Default value for closable is false
  size = "default", // Default size is "default"
  onClose,
  onClick,
  icon,
  children,
}) => {
  // Handle the close button click
  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevents the onClick event of the tag from firing
    if (onClose) {
      onClose(); // Calls the onClose callback if provided
    }
  };

  // Handle the tag click
  const handleClick = () => {
    if (onClick) {
      onClick(); // Calls the onClick callback if provided
    }
  };

  return (
    // Wrapper for the tag with dynamic styles based on props
    <TagWrapper
      color={color}
      size={size}
      onClick={handleClick} // Adds click handler to the tag
      clickable={!!onClick} // Adds a clickable attribute if onClick is provided
    >
      {/* Renders the optional icon inside the tag */}
      {icon && <IconWrapper>{icon}</IconWrapper>}
      {/* Displays the children (content) of the tag */}
      {children}
      {/* Renders the close button if the tag is closable */}
      {closable && <CloseIcon onClick={handleClose}>×</CloseIcon>}
    </TagWrapper>
  );
};

export default TagSection;
