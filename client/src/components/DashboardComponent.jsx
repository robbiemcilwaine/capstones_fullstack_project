import * as React from 'react';
import { Box, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';

export default function DashboardComponent({ deliveryByPostalDistrict ,routeData}) {

    console.log("this is route data", routeData);

  return (
    <React.Fragment>
    <Box sx={{ margin: '20px', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Route Dashboard
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{ fontSize: '1.5rem', padding: '12px' }}>Route ID</TableCell>
            <TableCell align="center" sx={{ fontSize: '1.5rem', padding: '12px' }}>Driver Assigned</TableCell>
            <TableCell align="center" sx={{ fontSize: '1.5rem', padding: '12px' }}>No. of Deliveries</TableCell>
            <TableCell align="center" sx={{ fontSize: '1.5rem', padding: '12px' }}>Route Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {routeData && routeData.length > 0 ? (
            routeData.map((route, index) => (
              <TableRow key={index} hover>
                <TableCell align="center" sx={{ fontSize: '1.125rem', padding: '10px' }}>{route.routeName}</TableCell>
                <TableCell align="center" sx={{ fontSize: '1.125rem', padding: '10px' }}>
                  {route.driverAssigned ? "Assigned" : "N/A"}
                </TableCell>
                <TableCell align="center" sx={{ fontSize: '1.125rem', padding: '10px' }}>
                  {(route.listOfWaypoints.length - 1)}
                </TableCell>
                <TableCell align="center" sx={{ fontSize: '1.125rem', padding: '10px' }}>{route.routeStatus}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} align="center" sx={{ fontSize: '1.125rem', padding: '10px' }}>
                No routes available
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Box>
  </React.Fragment>
  );
}
