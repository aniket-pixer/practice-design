import styled from "styled-components";

const CustomWrapper = styled.div`
  gap: 20px;
  padding: 50px;
`;

const CustomCheckboxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`;

const SelectOptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

const SelectedOptionsWrapper = styled.div`
  margin-top: 20px;
`;

const SelectedOptionsTitle = styled.h4`
  margin-bottom: 20px;
`;

export {
  CustomWrapper,
  CustomCheckboxWrapper,
  SelectOptionsWrapper,
  SelectedOptionsWrapper,
  SelectedOptionsTitle,
};
