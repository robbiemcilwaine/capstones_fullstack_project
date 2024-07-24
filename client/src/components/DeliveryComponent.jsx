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
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


function preventDefault(event) {}


export default function DeliveryComponent({allWayPointData}) {
 
  return (
    <React.Fragment>
    <h1>Unassigned Deliveries</h1>
    <Stack direction="row" spacing={2} padding={1} justifyContent={'center'}>
    </Stack>

    <Box sx={{ margin: '20px', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>

    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell align="center" sx={{ fontSize: '1.5rem', padding: '12px' }}>Name</TableCell>
          <TableCell align="center" sx={{ fontSize: '1.5rem', padding: '12px' }}>Address</TableCell>
          <TableCell align="center" sx={{ fontSize: '1.5rem', padding: '12px' }}>Delivery Id</TableCell>
          <TableCell align="center" sx={{ fontSize: '1.5rem', padding: '12px' }}>Route Id</TableCell>
          <TableCell align="center" sx={{ fontSize: '1.5rem', padding: '12px' }}>Delivery Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {allWayPointData.map((waypoint,index) => (
          <TableRow key={index}>
            <TableCell align="left" sx={{ fontSize: '1.125rem', padding: '10px' }}>{`${waypoint.delivery.customerName}`}</TableCell>
            <TableCell align="left" sx={{ fontSize: '1.125rem', padding: '10px' }}>{`${waypoint.delivery.houseNumber},
             ${waypoint.delivery.streetPrefix}
              ${waypoint.delivery.streetSuffix},
                ${waypoint.delivery.city},
                 ${waypoint.delivery.postalDistrict}
                  ${waypoint.delivery.outCode}`}</TableCell>
            <TableCell align="center" sx={{ fontSize: '1.125rem', padding: '10px' }}>{`${waypoint.delivery.id}`}</TableCell>
            <TableCell align="center" sx={{ fontSize: '1.125rem', padding: '10px' }}>{`${waypoint.route}`}</TableCell>
            <TableCell align="center" sx={{ fontSize: '1.125rem', padding: '10px' }}>{`${waypoint.delivery.deliveryStatus}`}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </Box>
  </React.Fragment>
  );
}