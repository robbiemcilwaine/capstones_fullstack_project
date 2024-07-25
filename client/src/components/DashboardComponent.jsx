import * as React from 'react';
import { Box, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';

export default function DashboardComponent({ deliveryByPostalDistrict }) {

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
          {/* <TableBody>
            {deliveryByPostalDistrict.map((delivery, index) => (
              <TableRow key={index} hover>
                <TableCell align="center" sx={{ fontSize: '1.125rem', padding: '10px' }}>{delivery.route ? delivery.route : "XXX"}</TableCell>  
                <TableCell align="center" sx={{ fontSize: '1.125rem', padding: '10px' }}>{delivery.driverAssigned ? "assigned" : "N/A"}</TableCell>
                <TableCell align="center" sx={{ fontSize: '1.125rem', padding: '10px' }}>{delivery.numberOfDeliveries ? delivery.numberOfDeliveries : 0}</TableCell>
                <TableCell align="center" sx={{ fontSize: '1.125rem', padding: '10px' }}>{delivery.deliveryStatus}</TableCell>
              </TableRow>
            ))}
          </TableBody> */}
         
          
          {
          Object.entries(deliveryByPostalDistrict).map(([postalDistrictKey, deliveries]) => (
            
              
              <TableRow key={`${postalDistrictKey}`} hover>
                <TableCell align="center" sx={{ fontSize: '1.125rem', padding: '10px' }}>
                  {postalDistrictKey + "-1"}
                </TableCell>
                {/* <TableCell align="center" sx={{ fontSize: '1.125rem', padding: '10px' }}>
                  {deliveries.map((delivery) => {
                    !delivery.driverAssigned ? overallBool = false : overallBool = true
                    if(overallBool == false){
                      return "N/A"
                    }

              
                  })} */}
              
                



              </TableRow>
            ))
          
}
        
      
        </Table>
      </Box>
    </React.Fragment>
  );
}
