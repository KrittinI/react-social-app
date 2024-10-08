import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "../pages/HomePage"
import LoginPage from "../pages/LoginPage"
import ProfilePage from "../pages/ProfilePage"
import NotFoundPage from "../pages/NotFoundPage"
import AppLayout from "../Layout/AppLayout"

// CreateBrowserRouter : FN
// RouterProvider : Component
// NestedRoute : เขียน Key Children เพิ่ม

const router = createBrowserRouter([
    { path: "/login", element: (<LoginPage />) },
    {
        path: "/", element: <AppLayout />, children: [
            { path: "", element: (<HomePage />) },
            { path: "profile", element: (<ProfilePage />) },
            { path: "*", element: (<NotFoundPage />) },

        ]
    }
])

function Router() {
    return (
        <RouterProvider router={router} />
    )
}

export default Router