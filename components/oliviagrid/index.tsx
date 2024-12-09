import React from "react";
import {
  Card,
  CardDataDiv,
  CartTitleAndProfit,
  ChartAVGBorder,
  ChartAvgBoxDiv,
  ChartAvgDiv,
  ChartAvgTextDiv,
  ChartContainer,
  ChartData,
  ChartDataDiv,
  GridCartProfit,
  IconAndTitle,
  SVGWrapper,
} from "./style";
import SVGIcon from "@/assets/icons/SVGIcon";

interface DashboardCardProps {
  title: string;
  value: number;
  change: number;
  svgname: string;
  chartData?: any[];
}

const DashboardCard: React.FC<DashboardCardProps> = (props) => {
  const { title, value, change, chartData, svgname } = props;
  const ChartDataBlock = Array.from({ length: 30 });
  return (
    <Card>
      <CardDataDiv>
        <IconAndTitle>
          <SVGWrapper>
            <SVGIcon
              height="18"
              width="18"
              viewBox="0 0 18 18"
              name={svgname}
            />
          </SVGWrapper>
          <CartTitleAndProfit>{title}</CartTitleAndProfit>
        </IconAndTitle>
        <CartTitleAndProfit
          style={{ color: change > 0 ? "var(--green)" : "var(--red)" }}
        >
          {change > 0 ? `+${change}%` : `${change}%`}
        </CartTitleAndProfit>
      </CardDataDiv>
      <GridCartProfit>{value}</GridCartProfit>
      <ChartContainer>
        {/* Replace with actual chart */}
        <ChartDataDiv>
          {ChartDataBlock.map((_, index) => {
            return <ChartData key={index}></ChartData>;
          })}

          <ChartAvgDiv>
            <ChartAvgTextDiv>Avg</ChartAvgTextDiv>
            <ChartAvgBoxDiv></ChartAvgBoxDiv>
            <ChartAVGBorder></ChartAVGBorder>
          </ChartAvgDiv>
        </ChartDataDiv>
      </ChartContainer>
    </Card>
  );
};

export default DashboardCard;
