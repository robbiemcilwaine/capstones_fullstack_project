import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import RouteIcon from '@mui/icons-material/Route';
import Stack from '@mui/material/Stack';
import DirectionsIcon from '@mui/icons-material/Directions';

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
    <Stack direction="row" spacing={2} padding={1} justifyContent={'center'}>
      <Button variant="contained" endIcon={<DirectionsIcon />}>
        Generate Routes
      </Button>
    </Stack>
    <Box sx={{width: '100%', mb: 2, overflowX: 'auto'}}>
    <Table size="small">
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
  </React.Fragment>
  );
}