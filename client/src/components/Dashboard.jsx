import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box } from '@mui/material';

// Generate Unassigned Delivery Data
function createData(id, routeId, postalDistrict, driverAssigned, numberOfDeliveries, deliveryStatus) {
  return {id, routeId, postalDistrict, driverAssigned, numberOfDeliveries, deliveryStatus };
}

function preventDefault(event) {
  event.preventDefault();
}

export default function Dashboard({deliveryData}) {
  return (
    <React.Fragment>
      <h1>Deliveries</h1>
      <div className='data-table'>
      <Box sx={{width: '100%', mb: 2, overflowX: 'auto'}}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell align="center">Route ID</TableCell>
            <TableCell align="center">Postal District</TableCell>
            <TableCell align="center">Driver Assigned</TableCell>
            <TableCell align="center">No. of Deliveries</TableCell>
            <TableCell align="center">Delivery Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {deliveryData.map((delivery) => (
            <TableRow key={deliveryData.id}>
              <TableCell align="center">{`${delivery.id}`}</TableCell>  
              <TableCell align="center">{`${delivery.postalDistrict}`}</TableCell>
              <TableCell align="center">{`${delivery.driverAssigned}`}</TableCell>
              <TableCell align="center">{`${delivery.numberOfDeliveries}`}</TableCell>
              <TableCell align="center">{`${delivery.deliveryStatus}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </Box>
      </div>
    </React.Fragment>
  );
}