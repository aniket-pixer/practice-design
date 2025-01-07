import styled from "styled-components";

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`;

const Trigger = styled.div`
  cursor: pointer;
  background-color: #f5f5f5;
  border-radius: 4px;
  transition: all 0.2s;
  &:hover {
    background-color: #e6f7ff;
    border-color: #91d5ff;
  }
`;

const Menu = styled.div`
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  min-width: 200px;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 5px 0;
`;

const MenuItem = styled.div`
  padding: 10px 15px;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export { Dropdown, Trigger, Menu, MenuItem };
