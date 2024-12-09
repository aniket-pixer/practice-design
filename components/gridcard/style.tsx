import { Typography } from "@/styles/typography";
import styled from "styled-components";

const DepositSection = styled.div`
  padding: 15px;
`;

const DepositDataLi = styled.li`
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #eaecf0;
  &:last-child {
    border-bottom: 1px solid #eaecf0;
  }
`;

const DepositAmount = styled.span`
  color: var(--green);
  ${Typography.body_md_medium}
`;

const DepositType = styled.span`
  ${Typography.body_md_semibold}
`;

const DepositType2 = styled.div`
  ${Typography.body_md_medium}
`;

const DepositsTitle = styled.h4`
  ${Typography.body_md_semibold}
  margin-bottom: 12px;
`;

const SvgCardWrapper = styled.div`
  fill: white;
  display: flex;
`;

const CardAndTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export {
  DepositSection,
  DepositDataLi,
  DepositAmount,
  DepositType,
  DepositsTitle,
  DepositType2,
  SvgCardWrapper,
  CardAndTitle,
};
