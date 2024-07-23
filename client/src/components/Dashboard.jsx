import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box } from '@mui/material';



function preventDefault(event) {
  event.preventDefault();
}

export default function Dashboard({deliveryData}) {
  return (
    <React.Fragment>
      <div className='data-table'>
      <Box >
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{ fontSize: '1.15rem', paddingLeft: '50px', paddingRight: '50px' }}>Route ID</TableCell>
            <TableCell align="center" sx={{ fontSize: '1.15rem', paddingLeft: '50px', paddingRight: '50px' }}>Postal District</TableCell>
            <TableCell align="center" sx={{ fontSize: '1.15rem', paddingLeft: '50px', paddingRight: '50px' }}>Driver Assigned</TableCell>
            <TableCell align="center" sx={{ fontSize: '1.15rem', paddingLeft: '50px', paddingRight: '50px' }}>No. of Deliveries</TableCell>
            <TableCell align="center" sx={{ fontSize: '1.15rem', paddingLeft: '50px', paddingRight: '50px' }}>Delivery Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {deliveryData.map((delivery,index) => (
            <TableRow key={index}>
              <TableCell align="center" sx={{ fontSize: '1.125rem' }}>{`${delivery.route}`}</TableCell>  
              <TableCell align="center" sx={{ fontSize: '1.125rem' }}>{`${delivery.postalDistrict}`}</TableCell>
              <TableCell align="center" sx={{ fontSize: '1.125rem' }}>{`${delivery.driverAssigned}`}</TableCell>
              <TableCell align="center" sx={{ fontSize: '1.125rem' }}>{`${delivery.numberOfDeliveries}`}</TableCell>
              <TableCell align="center" sx={{ fontSize: '1.125rem' }}>{`${delivery.deliveryStatus}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </Box>
      </div>
    </React.Fragment>
  );
}