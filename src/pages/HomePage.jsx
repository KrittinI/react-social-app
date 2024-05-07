import { Link, useNavigate } from "react-router-dom"
import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
// Link : Component

function HomePage() {
    // useNavigate : Hook => return Funtion for navigate
    const navigate = useNavigate();

    const handleClick = () => {
        // Code...

        // If Valid
        navigate("/rrangjjajgk")


    }
    return (
        <div>
            <h1>
                HomePage
            </h1>
            <Link to="/login">LoginPage</Link   >
            <Link to="/profile">ProfilePage</Link >
            <Button variant='contained' onClick={handleClick} startIcon={<DeleteIcon />}
                sx={{
                    padding: "16px",
                    color: "black",
                    "&:hover": {
                        color: "white"
                    }
                }}
            >Go to 404</Button>
        </div >
    )
}

export default HomePage