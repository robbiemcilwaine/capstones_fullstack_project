import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box } from '@mui/material';

// Generate Delivery Data
function createData(id, name, address, deliveryId, routeId, deliveryStatus) {
  return { id, name, address, deliveryId, routeId, deliveryStatus};
}

const rows = [
  createData(0, 'Elvis Presley', '47 Market St, Paddock, Huddersfield HD1 4SH', 1, null, 'UNDELIVERED'),
  createData(1, 'Tom Cruise', '467 Bradford Rd, Huddersfield HD2 2LL', 2, null, 'UNDELIVERED'),
  createData(2, 'Benedict Cumberbatch', '75 Acre St, Lindley, Huddersfield HD3 3DZ', 3, null, 'UNDELIVERED'),
  createData(3, 'Simon Cowell', '1 Robin Hood Hill, Berry Brow, Huddersfield HD4 7QP', 4, null, 'UNDELIVERED'),
  createData(4, 'Channing Tatum', 'Unit 2, 169 Wakefield Rd, Moldgreen, Huddersfield HD5 9AN', 5, null, 'UNDELIVERED'),

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
          <TableCell align="left">Name</TableCell>
          <TableCell align="left">Address</TableCell>
          <TableCell align="center">Delivery Id</TableCell>
          <TableCell align="center">Route Id</TableCell>
          <TableCell align="center">Delivery Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id}>
            <TableCell align="left">{`${row.name}`}</TableCell>
            <TableCell align="left">{`${row.address}`}</TableCell>
            <TableCell align="center">{`${row.deliveryId}`}</TableCell>
            <TableCell align="center">{`${row.routeId}`}</TableCell>
            <TableCell align="center">{`${row.deliveryStatus}`}</TableCell>
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