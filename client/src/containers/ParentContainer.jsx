import * as React from 'react';
import Button from '@mui/material/Button';
import NavigationComponent from '../components/NavigationComponent';
import { CssBaseline, Container, Typography } from '@mui/material';



const ParentContainer = () => {

    return (
    <React.Fragment>
        <CssBaseline />
        <Container>
            <Typography variant="h4" component="h1" gutterBottom>
            Dashboard
            </Typography>
            <NavigationComponent />
        </Container>
    </React.Fragment>
    )
}

export default ParentContainer; 