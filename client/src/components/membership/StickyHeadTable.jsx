import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import KeyIcon from '@mui/icons-material/Key';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TableColumns from './TableColumns';
const columns = [
  { id: 'userId', label: 'Id', minWidth: 10 },
  { id: 'name', label: 'Name', minWidth: 140 },
  { id: 'email', label: 'Email', minWidth: 170 },
  {
    id: 'membership',
    label: 'Membership',
    minWidth: 100,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'createDate',
    label: 'Create Date',
    minWidth: 120,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'refStore',
    label: 'Ref Store',
    minWidth: 140,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'totalPayments',
    label: 'Total Payments',
    minWidth: 150,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'afterContributions',
    label: 'After Contributions',
    minWidth: 160,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'status',
    label: 'Status',
    minWidth: 80,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'password',
    label: 'Password',
    minWidth: 80,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'view',
    label: 'view',
    minWidth: 50,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(userId, name, email, membership, createDate, refStore, totalPayments, afterContributions, status, password, view) {
  return { userId, name, email, membership, createDate, refStore, totalPayments, afterContributions, status, password, view };
}

const rows = [
  createData(113, 'carol mahan', 'alovialove923@gmail.com', "Single Plan", "2023-12-0", "HQ Retail", "31.8 USD", "19.08 USD", "Cancelled", "dsfjiu4509", "Button"),
  createData(113, 'carol mahan', 'alovialove923@gmail.com', "Single Plan", "2023-12-0", "HQ Retail", "31.8 USD", "19.08 USD", "Active", "dsfjiu4509", "Button"),
  createData(113, 'carol mahan', 'alovialove923@gmail.com', "Single Plan", "2023-12-0", "HQ Retail", "31.8 USD", "19.08 USD", "Active", "dsfjiu4509", "Button"),
  createData(113, 'carol mahan', 'alovialove923@gmail.com', "Single Plan", "2023-12-0", "HQ Retail", "31.8 USD", "19.08 USD", "Active", "dsfjiu4509", "Button"),
  createData(113, 'carol mahan', 'alovialove923@gmail.com', "Single Plan", "2023-12-0", "HQ Retail", "31.8 USD", "19.08 USD", "Active", "dsfjiu4509", "Button"),
  createData(113, 'carol mahan', 'alovialove923@gmail.com', "Single Plan", "2023-12-0", "HQ Retail", "31.8 USD", "19.08 USD", "Cancelled", "dsfjiu4509", "Button"),
  createData(113, 'carol mahan', 'alovialove923@gmail.com', "Single Plan", "2023-12-0", "HQ Retail", "31.8 USD", "19.08 USD", "Cancelled", "dsfjiu4509", "Button"),
  createData(113, 'carol mahan', 'alovialove923@gmail.com', "Single Plan", "2023-12-0", "HQ Retail", "31.8 USD", "19.08 USD", "Cancelled", "dsfjiu4509", "Button"),
  createData(113, 'carol mahan', 'alovialove923@gmail.com', "Single Plan", "2023-12-0", "HQ Retail", "31.8 USD", "19.08 USD", "Cancelled", "dsfjiu4509", "Button"),
  createData(113, 'carol mahan', 'alovialove923@gmail.com', "Single Plan", "2023-12-0", "HQ Retail", "31.8 USD", "19.08 USD", "Cancelled", "dsfjiu4509", "Button"),
  createData(113, 'carol mahan', 'alovialove923@gmail.com', "Single Plan", "2023-12-0", "HQ Retail", "31.8 USD", "19.08 USD", "Cancelled", "dsfjiu4509", "Button"),
  createData(113, 'carol mahan', 'alovialove923@gmail.com', "Single Plan", "2023-12-0", "HQ Retail", "31.8 USD", "19.08 USD", "Cancelled", "dsfjiu4509", "Button"),
  createData(113, 'carol mahan', 'alovialove923@gmail.com', "Single Plan", "2023-12-0", "HQ Retail", "31.8 USD", "19.08 USD", "Cancelled", "dsfjiu4509", "Button"),
  createData(113, 'carol mahan', 'alovialove923@gmail.com', "Single Plan", "2023-12-0", "HQ Retail", "31.8 USD", "19.08 USD", "Cancelled", "dsfjiu4509", "Button"),
];

const StickyHeadTable = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 550 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          <TableColumns value={value} column={column}/>
                        </TableCell>
                      )
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}


export default StickyHeadTable;