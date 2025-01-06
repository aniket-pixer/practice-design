"use client";
import React from "react";
// Import pdfMake and its fonts properly
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { Button, pdfStyles } from "./style"; // Importing custom Button component and styles for PDF

// Assign the virtual file system (vfs) to pdfMake
pdfMake.vfs = pdfFonts.vfs;

const InvoicePdf = () => {
  // Function to generate and download the PDF
  const generatePDF = () => {
    // Define the structure of the PDF document
    const documentDefinition = {
      content: [
        { text: "Invoice", style: "header" }, // Main header for the invoice
        { text: "Invoice #12345", style: "subheader" }, // Invoice number
        { text: "Date: 2024-12-28", style: "subheader" }, // Invoice date
        {
          style: "tableExample", // Style for the table
          table: {
            headerRows: 1, // Number of header rows in the table
            widths: ["*", "auto", "auto", "auto"], // Column widths
            body: [
              // Table body with header and data rows
              [
                { text: "Product", style: "tableHeader" }, // Table header: Product
                { text: "Quantity", style: "tableHeader" }, // Table header: Quantity
                { text: "Unit Price", style: "tableHeader" }, // Table header: Unit Price
                { text: "Total", style: "tableHeader" }, // Table header: Total
              ],
              ["Product 1", 2, "$10.00", "$20.00"], // Row 1: Product details
              ["Product 2", 1, "$15.00", "$15.00"], // Row 2: Product details
              ["Product 3", 3, "$7.00", "$21.00"], // Row 3: Product details
            ],
          },
          layout: {
            // Customize the table layout
            fillColor: (rowIndex: any) => {
              // Alternate row colors
              return rowIndex % 2 === 0 ? "#F2F2F2" : null;
            },
          },
        },
        { text: "\nTotal: $56.00", style: "subheader" }, // Total amount
        { text: "Thank you for your business!", style: "footer" }, // Footer message
      ],
      styles: pdfStyles, // Reference to custom styles defined in "./style"
    };

    // Create the PDF and prompt the user to download it
    pdfMake.createPdf(documentDefinition).download("invoice.pdf");
  };

  return (
    <div>
      {/* Button to trigger PDF generation */}
      <Button onClick={generatePDF}>Download Invoice</Button>
    </div>
  );
};

export default InvoicePdf;
