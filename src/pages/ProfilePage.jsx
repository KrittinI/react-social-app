import { Link } from "react-router-dom"
function ProfilePage() {
    return (
        <div>
            <h1>
                ProfilePage
            </h1>
            <Link to="/">HomePage</Link   >
            <Link to="/login">LoginPage</Link >
        </div>
    )
}

export default ProfilePage