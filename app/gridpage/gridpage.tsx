import DashboardCard from "@/components/oliviagrid";
import React from "react";
import {
  GridCardSection1,
  GridCardSection2,
  GridCardSectionBox,
  GridPageWrapper,
  GridSectionWrapper,
} from "./style";
import DepositList from "@/components/gridcard";

const GridPage = () => {
  // this object using for the chart data card
  const metrics = [
    {
      title: "Check Out",
      value: 25610,
      change: -9.25,
      chartData: [],
      svgname: "check-out-icon",
    },
    {
      title: "Visitor",
      value: 120010,
      change: 32.1,
      chartData: [],
      svgname: "visitor-icon",
    },
    {
      title: "Add to Chart",
      value: 68013,
      change: 15.1,
      chartData: [],
      svgname: "chart-icon",
    },
    {
      title: "Lead",
      value: 120010,
      change: 32.1,
      chartData: [],
      svgname: "check-out-icon",
    },
  ];

  // this object using for the chart data card
  const metricsOrder = [
    {
      title: "Check Out",
      value: 25610,
      change: -9.25,
      chartData: [],
      svgname: "check-out-icon",
    },
    {
      title: "Visitor",
      value: 120010,
      change: 32.1,
      chartData: [],
      svgname: "visitor-icon",
    },
    {
      title: "Add to Chart",
      value: 68013,
      change: 15.1,
      chartData: [],
      svgname: "chart-icon",
    },
  ];

  // this object using for Recent Deposits data
  const deposits: {
    type: string;
    amount: string;
    iconName: string;
  }[] = [
    {
      type: "Visa ending in 1234",
      amount: "+$244.00",
      iconName: "visa-icon",
    },
    {
      type: "Mastercard ending in 5678",
      amount: "+$326.00",
      iconName: "master-card-icon",
    },
    {
      type: "Stripe deposit",
      amount: "+$408.00",
      iconName: "stripe-icon",
    },
    {
      type: "Visa ending in 1234",
      amount: "+$244.00",
      iconName: "visa-icon",
    },
    {
      type: "Visa ending in 1234",
      amount: "+$244.00",
      iconName: "pey-pal-icon",
    },
    {
      type: "Visa ending in 1234",
      amount: "+$244.00",
      iconName: "apple-pay",
    },
    {
      type: "Stripe deposit",
      amount: "+$408.00",
      iconName: "stripe-icon",
    },
  ];

  return (
    <GridPageWrapper>
      <GridCardSection1>
        <GridSectionWrapper className="item1">
          {metrics.map((metric, index) => (
            <DashboardCard key={index} {...metric} />
          ))}
        </GridSectionWrapper>
      </GridCardSection1>
      <GridCardSection2 className="wrapper-2">
        <GridCardSectionBox className="a">
          {metricsOrder.map((metric, index) => (
            <DashboardCard key={index} {...metric} />
          ))}
        </GridCardSectionBox>
        <GridCardSectionBox className="b">
          {" "}
          <DepositList deposits={deposits} />
        </GridCardSectionBox>
        <GridCardSectionBox className="c"></GridCardSectionBox>
      </GridCardSection2>
    </GridPageWrapper>
  );
};

export default GridPage;
