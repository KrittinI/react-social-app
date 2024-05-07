import { Box, Grid } from "@mui/material"
import AppBar from "../components/AppBar";
import SideBar from "../components/SideBar";
import RightBar from "../components/RightBar";
import Feed from "../components/Feed";
function HomePage() {
    return (
        <Box flexGrow={1}>
            <AppBar />
            {/* Top: AppBar */}

            <Grid container sx={{ textAlign: 'center', height: 'calc(100vh-64px' }}>
                <Grid
                    item xs={3}
                    sx={{
                        backgroundColor: 'wheat',
                        display: { xs: 'none', md: 'block' }
                    }}
                >
                    <SideBar />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Feed />
                </Grid>
                <Grid
                    item xs={3}
                    sx={{
                        backgroundColor: 'wheat',
                        display: { xs: 'none', md: 'block' }
                    }}
                >
                    <RightBar />
                </Grid>
            </Grid>


        </Box >
    )
}

export default HomePage