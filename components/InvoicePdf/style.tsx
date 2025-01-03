import styled from "styled-components";

const pdfStyles = {
  header: {
    fontSize: 18,
    bold: true,
    alignment: "center",
    margin: [0, 0, 0, 10],
  },
  subheader: {
    fontSize: 14,
    bold: true,
    margin: [0, 10, 0, 5],
  },
  tableHeader: {
    bold: true,
    fontSize: 12,
    color: "white",
    fillColor: "#4CAF50", // Green header background
    alignment: "center",
  },
  tableCell: {
    margin: [5, 5, 5, 5],
    alignment: "center",
  },
  footer: {
    fontSize: 10,
    italics: true,
    alignment: "center",
    margin: [0, 10, 0, 0],
  },
};

const Button = styled.button`
  background: black;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  margin-top: 50px;
  color: white;
`;

export { pdfStyles, Button };
