import { createContext, useEffect, useState } from "react";
import * as postAPI from '../apis/postApi'

export const PostContext = createContext();


// eslint-disable-next-line react/prop-types
export default function PostContextProvider({ children }) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getAllPosts()
    }, [])

    // GET - AllPost
    const getAllPosts = async () => {
        try {
            const response = await postAPI.getAllPost()
            setPosts(response.data)
            console.log(response.data)
        } catch (error) {
            console.log(error);
        }
    }



    return <PostContext.Provider value={{ posts: posts }}>{children}</PostContext.Provider>
}