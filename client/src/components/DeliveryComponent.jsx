import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box, TableContainer, Paper } from '@mui/material';
import Stack from '@mui/material/Stack';

function preventDefault(event) {}

export default function DeliveryComponent({ allWayPointData, deliveryData }) {
  return (
    <>
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
    </>
  );
}
