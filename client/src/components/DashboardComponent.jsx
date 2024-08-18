import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

export default function DashboardComponent({ deliveryByPostalDistrict, routeData }) {

  return (
    <>
      <Box sx={{ margin: 'auto', padding:'auto', backgroundColor: '', borderRadius: '8px' }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650, backgroundColor: '#D3D0CB'}} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell align="center" sx={{ fontSize: '1.5rem', paddingLeft: '50px', paddingRight: '50px' }}>Route ID</TableCell>
                <TableCell align="center" sx={{ fontSize: '1.5rem', paddingLeft: '50px', paddingRight: '50px' }}>Driver Assigned</TableCell>
                <TableCell align="center" sx={{ fontSize: '1.5rem', paddingLeft: '50px', paddingRight: '50px' }}>No. of Deliveries</TableCell>
                <TableCell align="center" sx={{ fontSize: '1.5rem', paddingLeft: '50px', paddingRight: '50px' }}>Route Status</TableCell>
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
        </TableContainer>
      </Box>
    </>
  );
}
