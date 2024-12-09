import { Typography } from "@/styles/typography";
import styled from "styled-components";

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.5rem;
  padding: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const FullWidthCard = styled.div`
  grid-column: span 4;
  background: #fff;
  border-radius: 8px;
  padding: 1rem;
  border: 1px solid #eaecf0;
  box-shadow: 0px 0.59px 1.19px 0px #1018280d;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 1rem;
  border: 1px solid #eaecf0;
  box-shadow: 0px 0.59px 1.19px 0px #1018280d;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ChartContainer = styled.div`
  width: 100%;
  height: 60px;
  margin-top: 1rem;
`;

const CardDataDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const GridCartProfit = styled.div`
  margin-top: 34px;
  ${Typography.heading_heading_semibold}
`;

const CartTitleAndProfit = styled.div`
  ${Typography.body_md_semibold}
`;

const ChartDataDiv = styled.div`
  height: 100%;
  display: flex;
  align-items: end;
  gap: 2px;
  position: relative;
`;

const IconAndTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const SVGWrapper = styled.div`
  fill: white;
  display: flex;
`;

const ChartData = styled.div`
  width: 6px;
  height: 44px;
  background: #efefef;
  border-radius: 10px;
`;

const ChartAvgDiv = styled.div`
  width: 100%;
  position: absolute;
  transform: translate(0, 50%);
  top: 50%;
  color: white;
  border-radius: 10px 0 0 10px;
  display: flex;
  align-items: center;
`;

const ChartAvgTextDiv = styled.div`
  background: black;
  padding-left: 2px;
  height: 10px;
  z-index: 1;
  font-size: 8px;
  border-radius: 2px 0 0 2px;
`;

const ChartAvgBoxDiv = styled.div`
  width: 6.5px;
  height: 6.5px;
  transform: rotate(48deg);
  background: black;
  margin-left: -3px;
`;

const ChartAVGBorder = styled.div`
  border-bottom: 1px dotted black;
  width: 100%;
`;

export {
  DashboardGrid,
  ChartAvgDiv,
  FullWidthCard,
  Card,
  ChartContainer,
  CardDataDiv,
  GridCartProfit,
  CartTitleAndProfit,
  ChartDataDiv,
  IconAndTitle,
  SVGWrapper,
  ChartData,
  ChartAvgTextDiv,
  ChartAvgBoxDiv,
  ChartAVGBorder,
};
