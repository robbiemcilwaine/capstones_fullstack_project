import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box } from '@mui/material';

// Generate Delivery Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
  createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
  createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
];


function preventDefault(event) {
  event.preventDefault();
}

export default function DeliveryComponent() {
  return (
    <React.Fragment>
    <h1>Unassigned Deliveries</h1>
    <Box sx={{width: '100%', mb: 2}}>
    <Table size="small" style={{ width: 1200 }}>
      <TableHead>
        <TableRow>
          <TableCell align="center">Name</TableCell>
          <TableCell align="center">Address</TableCell>
          <TableCell align="center">Delivery Id</TableCell>
          <TableCell align="center">Route Id</TableCell>
          <TableCell align="center">Delivery Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id}>
            <TableCell align="center">{row.date}</TableCell>
            <TableCell align="center">{row.name}</TableCell>
            <TableCell align="center">{row.shipTo}</TableCell>
            <TableCell align="center">{row.paymentMethod}</TableCell>
            <TableCell align="center">{`$${row.amount}`}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </Box>
    <Box sx={{ textAlign: 'left' }}>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 2 }}>
        See more orders
      </Link>
    </Box>
  </React.Fragment>
  );
}