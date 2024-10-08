
import { Box, Button, TextField, Typography, Divider } from "@mui/material"
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from '../context/AuthContext'

function LoginPage() {
    const { login } = useContext(AuthContext)
    const navigate = useNavigate();
    const [emailOrPhone, setEmailOrPhone] = useState('')
    const [password, setPassword] = useState('')

    const handleChangeEmailOrPhone = (e) => setEmailOrPhone(e.target.value)
    const handleChangePassword = (e) => setPassword(e.target.value)
    const handleSubmitLogin = async (e) => {
        e.preventDefault();
        if (emailOrPhone === 'qwer' && password === '1234') {
            await login()
            navigate('/')
        } else {
            alert("Invalid")
        }
    }



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
                    onSubmit={handleSubmitLogin}
                >
                    <TextField
                        type='text'
                        variant="outlined"
                        label="email or Phone number"
                        size="small"
                        value={emailOrPhone}
                        onChange={handleChangeEmailOrPhone}
                    />
                    <TextField
                        type='password'
                        variant="outlined"
                        label='password'
                        size="small"
                        value={password}
                        onChange={handleChangePassword}
                    />
                    <Button
                        type='submit'
                        variant="contained"
                        color="primary"
                    >
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
                    <Button
                        type='button'
                        variant="contained"
                        color="success"
                    >
                        Create New Account
                    </Button>
                </Box>
            </Box>
        </Box >
    )
}

export default LoginPage