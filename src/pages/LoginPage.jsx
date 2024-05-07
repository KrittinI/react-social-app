import { Box, Button, TextField, Typography, Divider } from "@mui/material"

function LoginPage() {
    return (
        <Box component='main'
            height='100vh'
            display='flex'
            justifyContent='space-between'
        >
            <Box
                component='section'
                display='flex'
                flexDirection='column'
                justifyContent='center'
                p='20px'
                flex={1}
                sx={{ display: { xs: 'none', sm: 'flex' } }}
            >
                <Typography variant="h3" color='#4D8ED3' fontWeight={900}>FakeBuck</Typography>
                <Typography variant="subtitle" fontWeight={500}>Connect with friend and the world</Typography>
            </Box>
            <Box
                component='section'
                display='flex'
                flexDirection='column'
                justifyContent='center'
                p='20px'
                flex={1}
            >
                <Box
                    component='form'
                    display='flex'
                    flexDirection='column'
                    gap='10px' padding='8px'
                    backgroundColor='white'
                    borderRadius='4px'
                >
                    <TextField
                        type='text'
                        variant="outlined"
                        label="email or Phone number"
                        size="small"
                    />
                    <TextField
                        type='password'
                        variant="outlined"
                        label='password'
                        size="small"
                    />
                    <Button type='submit' variant="contained" color="primary">
                        Login
                    </Button>
                    <Button
                        type='button'
                        variant="text"
                        disableElevation
                        color="primary"
                        sx={{ fontSize: '12px' }}
                    >
                        FORGOT PASSWORD?
                    </Button>
                    <Divider />
                    <Button type='button' variant="contained" color="success">
                        Create New Account
                    </Button>
                </Box>
            </Box>
        </Box >
    )
}

export default LoginPage