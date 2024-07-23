import Dashboard from "../components/Dashboard";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';

const HomeContainer = ({deliveryData}) => {
    return (
        <>
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper sx={{ p: 10, display: 'flex', flexDirection: 'column', width: '200%', backgroundColor: 'orange'}}>
                            <Dashboard deliveryData={deliveryData}/>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default HomeContainer;