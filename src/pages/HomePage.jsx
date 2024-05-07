import { Link, useNavigate } from "react-router-dom"
// Link : Component

function HomePage() {
    // useNavigate : return Funtion
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
            <button onClick={handleClick}>Go to 404</button>
        </div>
    )
}

export default HomePage