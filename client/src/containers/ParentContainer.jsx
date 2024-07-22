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
            My Application
            </Typography>
            <NavigationComponent />
        </Container>
    </React.Fragment>
    )
}

export function ButtonUsage() {
    return <Button variant="contained">Hello world</Button>;
}

export default ParentContainer; 