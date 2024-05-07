import { createContext, useState } from "react";
import * as userAPI from '../apis/userApi'

export const AuthContext = createContext();


// eslint-disable-next-line react/prop-types
export default function AuthContextProvider({ children }) {
    const [user, setUser] = useState(null)

    const login = async () => {
        try {
            const response = await userAPI.getUserById('1');
            // Note: api ("/login")
            console.log(response.data);
            setUser(response.data)
        } catch (error) {
            setUser(null)
            console.log(error);
        }
    }

    const logout = () => {
        setUser(null)
    }


    return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
}