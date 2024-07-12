import React from "react";
import { Table, TableBody, TableCell, TableRow, TableHead } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledTable = styled(Table)(({ theme }) => ({
  marginTop: theme.spacing(2),
  borderRadius: "10px",
  overflow: "hidden",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  fontWeight: "bold",
  backgroundColor: "#f5f5f5",
  color: theme.palette.common.black,
  borderBottom: "1px solid #ddd",
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(even)": {
    backgroundColor: "#fafafa",
  },
  "&:hover": {
    backgroundColor: "#f1f1f1",
  },
}));

const ProductTable = ({ products }) => {
  return (
    <StyledTable>
      <TableHead>
        <StyledTableRow>
          <StyledTableCell>Product Name</StyledTableCell>
          <StyledTableCell>Type</StyledTableCell>
          <StyledTableCell>Generic</StyledTableCell>
          <StyledTableCell>Color</StyledTableCell>
          <StyledTableCell>Shape</StyledTableCell>
          <StyledTableCell>Weight (mg)</StyledTableCell>
          <StyledTableCell>Width (mm)</StyledTableCell>
          <StyledTableCell>Height (mm)</StyledTableCell>
        </StyledTableRow>
      </TableHead>
      <TableBody>
        {products.map((row, index) => (
          <StyledTableRow key={index}>
            <TableCell>{row.product_name}</TableCell>
            <TableCell>{row.type}</TableCell>
            <TableCell>{row.generic}</TableCell>
            <TableCell>{row.color}</TableCell>
            <TableCell>{row.shape}</TableCell>
            <TableCell>{row.weight_mg}</TableCell>
            <TableCell>{row.width_mm}</TableCell>
            <TableCell>{row.height_mm}</TableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </StyledTable>
  );
};

export default ProductTable;
