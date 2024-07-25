import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box, Typography, TableContainer, Paper } from '@mui/material';
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

export default function DeliveryComponent({ allWayPointData, deliveryData }) {
  return (
    <React.Fragment>
      <Stack direction="row" spacing={2} padding={1} justifyContent={'center'}>
      </Stack>
      <Box sx={{ margin: 'auto', padding: 'auto', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 , backgroundColor: '#D3D0CB'}} size="small" aria-label="a dense table">
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
              {deliveryData.map((delivery, index) => (
                <TableRow key={index} hover>
                  <TableCell align="left" sx={{ fontSize: '1.125rem', padding: '10px' }}>{delivery.customerName}</TableCell>
                  <TableCell align="left" sx={{ fontSize: '1.125rem', padding: '10px' }}>
                    {delivery.houseNumber}, {delivery.streetPrefix} {delivery.streetSuffix}, {delivery.city}, {delivery.postalDistrict} {delivery.outCode}
                  </TableCell>
                  <TableCell align="center" sx={{ fontSize: '1.125rem', padding: '10px' }}>{delivery.id}</TableCell>
                  <TableCell align="center" sx={{ fontSize: '1.125rem', padding: '10px' }}>{delivery.waypoint.route[0].routeName}</TableCell>
                  <TableCell align="center" sx={{ fontSize: '1.125rem', padding: '10px' }}>{delivery.deliveryStatus}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </React.Fragment>
  );
}
