import React from "react";
import {
  CardAndTitle,
  DepositAmount,
  DepositDataLi,
  DepositSection,
  DepositsTitle,
  DepositType,
  DepositType2,
  SvgCardWrapper,
} from "./style";
import SVGIcon from "@/assets/icons/SVGIcon";

interface Deposit {
  type: string;
  amount: string;
  iconName: string;
}

interface DepositListProps {
  deposits: Deposit[];
}

const DepositList: React.FC<DepositListProps> = (props) => {
  const { deposits } = props;
  return (
    <DepositSection>
      <DepositsTitle>Recent Deposits</DepositsTitle>
      <ul>
        {deposits.map((deposit, index) => (
          <DepositDataLi key={index}>
            <CardAndTitle>
              <SvgCardWrapper>
                <SVGIcon
                  width="28"
                  height="20"
                  viewBox="0 0 28 20"
                  name={deposit.iconName}
                />
              </SvgCardWrapper>
              <div>
                <DepositType>{deposit.type}</DepositType>
                <DepositType2>Expiry 06/2024</DepositType2>
              </div>
            </CardAndTitle>
            <DepositAmount>{deposit.amount}</DepositAmount>
          </DepositDataLi>
        ))}
      </ul>
    </DepositSection>
  );
};

export default DepositList;
