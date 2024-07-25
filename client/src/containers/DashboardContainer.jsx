import Dashboard from "../components/DashboardComponent";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import { CenterFocusStrong } from "@mui/icons-material";

const DashboardContainer = ({deliveryByPostalDistrict, routeData}) => {
    return (
        <>
        <h1>Current Routes</h1>
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4, display: 'flex',  justifyContent: "center"}}>
                <Grid container spacing={3} justifyContent='center'>
                    <Grid item xs={12}>
                        <Paper sx={{p: 10, display: 'flex', flexDirection: 'column', maxWidth: '1200px', margin: '0 auto'}}>
                            <Dashboard deliveryByPostalDistrict={deliveryByPostalDistrict} routeData = {routeData}/>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
            <footer>
                <ul>
                    <li>Contact us: +44 (0) 330 1232288</li>
                    <li>RainforestRetail &copy;</li>
                </ul>
                <ul>
                    <li>Address: 123 Main Street, London, SW1</li>
                </ul>
            </footer>
        </>
    );
}

export default DashboardContainer;