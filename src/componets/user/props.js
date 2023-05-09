import React from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 50,
  },
}));


function LogChart(props) {
  return (
    <TableContainer component={Paper}  >
       <Table sx={{ minWidth: 300 }} aria-label="customized table" >
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Log Description</StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Date</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(props.chores).map((row) => (
            <TableRow
             
              sx={{ '&:last-child td, &:last-child td, &:last-child td': { border: 0 } }}
            >
              <StyledTableCell align="center">{row[0]}</StyledTableCell>
              <StyledTableCell align="center">{row[1]}</StyledTableCell>
              <StyledTableCell align="center">{row[2]}</StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
  );
}

export default LogChart;