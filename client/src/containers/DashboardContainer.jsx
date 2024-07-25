import Dashboard from "../components/DashboardComponent";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import { CenterFocusStrong } from "@mui/icons-material";

const DashboardContainer = ({deliveryByPostalDistrict, routeData}) => {
    return (
        <>
        <h1 className="header-colour">Current Routes</h1>
        <main className='main-component-sizing'>
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4, display: 'flex',  justifyContent: "center"}}>
                <Grid container spacing={3} justifyContent='center'>
                    <Grid item xs={12}>
                        <Paper sx={{p: 10, display: 'flex', flexDirection: 'column', maxWidth: '1200px', margin: '0 auto'}}>
                            <Dashboard deliveryByPostalDistrict={deliveryByPostalDistrict} routeData = {routeData}/>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </main>
        </>
    );
}

export default DashboardContainer;