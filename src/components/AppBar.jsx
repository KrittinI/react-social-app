import { AppBar as MuiAppBar, Box, IconButton, Avatar, Toolbar, Typography, Menu, MenuItem } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'
import { useState, useContext } from "react";
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from "react-router-dom";

export default function AppBar() {
    const { logout } = useContext(AuthContext)
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null)

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleLogout = () => {
        logout();
        navigate('/login')
    }

    return (
        <MuiAppBar position="static">
            <Toolbar
                sx={{
                    display: 'flex',
                    width: "100%",
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                <Box display='flex' alignItems='center' gap='10px'>
                    {/* Left */}
                    <IconButton>
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        FakeBuck
                    </Typography>
                </Box>

                {/* Right */}
                <Box>
                    <Avatar onClick={handleClick} />
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem>Profile</MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>

                </Box>

            </Toolbar >
        </MuiAppBar >
    )
}
