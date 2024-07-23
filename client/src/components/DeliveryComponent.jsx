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


export default function DeliveryComponent({waypointData}) {

  const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: '4px 0',
      },
      '& .MuiMenuItem-root': {
        '& .MuiSvgIcon-root': {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        '&:active': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  }));
  
  function CustomizedMenus() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    }
  }
 
  return (
    <React.Fragment>
    <h1>Unassigned Deliveries</h1>
    <Stack direction="row" spacing={2} padding={1} justifyContent={'center'}>
      <Button variant="contained" endIcon={<DirectionsIcon />}>
        Generate Routes
      </Button>
    </Stack>
    <FormControl>
      <InputLabel htmlFor="input-name">Customer Name</InputLabel>
      <Input id="input-name" aria-describedby="my-helper-text" />
      <FormHelperText id="my-helper-text">Seach by Name</FormHelperText>
      <Button variant="outline">Search</Button> 
    </FormControl>  
<Box>
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
        {waypointData.map((waypoint,index) => (
          <TableRow key={index}>
            <TableCell align="left">{`${waypoint.delivery.customerName}`}</TableCell>
            <TableCell align="left">{`${waypoint.delivery.houseNumber},
             ${waypoint.delivery.streetPrefix}
              ${waypoint.delivery.streetSuffix},
                ${waypoint.delivery.city},
                 ${waypoint.delivery.postalDistrict}
                  ${waypoint.delivery.outCode}`}</TableCell>
            <TableCell align="center">{`${waypoint.delivery.id}`}</TableCell>
            <TableCell align="center">{`${waypoint.route}`}</TableCell>
            <TableCell align="center">{`${waypoint.delivery.deliveryStatus}`}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </Box>
  </React.Fragment>
  );
}