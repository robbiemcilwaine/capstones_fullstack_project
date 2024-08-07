import Dashboard from "../components/DashboardComponent";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

const DashboardContainer = ({deliveryByPostalDistrict, routeData}) => {
    return (
        <>
        <h1 className="header-colour">Current Routes</h1>
        <main className='main-component-sizing'>
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4, display: 'flex',  justifyContent: "center"}}>
                <Grid container spacing={3} justifyContent='center'>
                    <Grid item xs={12}>
                            <Dashboard deliveryByPostalDistrict={deliveryByPostalDistrict} routeData = {routeData}/>
                    </Grid>
                </Grid>
            </Container>
        </main>
        </>
    );
}

export default DashboardContainer;