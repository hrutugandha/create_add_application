import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, click, conversion, cost, revenue) {
  return { name, click, conversion, cost, revenue  };
}

const rows = [
  createData('Cosmetics', 72, 4272, 8, 16568),
  createData('Serums', 3961, 27331, 115, 1363,56),
  createData('Facewashes', 9462, 76831, 123, 266800),
  createData('Shampoos', 439, 2151, 5, 11029),
  createData('Conditioners', 1680, 3864, 49, 175245),
  createData('Facewashes 2', 4978, 29370, 189, 623106),
  createData('Total', 26510, 143819, 489, 1573563),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper} style={{flex:"1"}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><h4>Campaigns</h4></TableCell>
            <TableCell align="right"><h4>Clicks</h4></TableCell>
            <TableCell align="right"><h4>Costs</h4></TableCell>
            <TableCell align="right"><h4>Conversions</h4></TableCell>
            <TableCell align="right"><h4>Revenue</h4></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.click}</TableCell>
              <TableCell align="right">{row.conversion}</TableCell>
              <TableCell align="right">USD {row.cost}</TableCell>
              <TableCell align="right">{row.revenue}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}