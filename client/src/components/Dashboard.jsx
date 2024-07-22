import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box } from '@mui/material';

// Generate Unassigned Delivery Data
function createData(id, routeId, postalDistrict, driverAssigned, numberOfDeliveries, status) {
  return {id, routeId, postalDistrict, driverAssigned, numberOfDeliveries, status };
}

const rows = [
  createData(0, 'HD1-XX', 'HD1', false, 10, 'UNDELIVERED'),
  createData(1, 'HD2-XX', 'HD2', true, 12, 'IN TRANSIT'),
  createData(2, 'HD3-XX', 'HD3', true, 15, 'DELIVERED'),
  createData(3, 'HD4-XX', 'HD4', true, 5, 'INTRANSIT'),
  createData(4, 'HD5-XX', 'HD5', true, 30, 'DELIVERED'),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Dashboard() {
  return (
    <React.Fragment>
      <h1>Deliveries</h1>
      <Box sx={{width: '100%', mb: 2}}>
      <Table size="small" style={{ width: 1200 }}>
        <TableHead>
          <TableRow>
            <TableCell align="center">Route ID</TableCell>
            <TableCell align="center">Postal District</TableCell>
            <TableCell align="center">Driver Assigned</TableCell>
            <TableCell align="center">No. of Deliveries</TableCell>
            <TableCell align="center">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="center">{`${row.routeId}`}</TableCell>  
              <TableCell align="center">{`${row.postalDistrict}`}</TableCell>
              <TableCell align="center">{`${row.driverAssigned}`}</TableCell>
              <TableCell align="center">{`${row.numberOfDeliveries}`}</TableCell>
              <TableCell align="center">{`${row.status}`}</TableCell>
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