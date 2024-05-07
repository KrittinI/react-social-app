import { Stack, Box, TextField, Button } from "@mui/material"
import PostItem from "./PostItem"
import { useContext } from "react"
import { PostContext } from '../context/PostContext'

function Feed() {
    const { posts } = useContext(PostContext)
    return (
        <Box backgroundColor='#eeeeee'>
            <Stack
                spacing={1}
                sx={{ alignItems: 'center' }}
                p={4}>
                <TextField sx={{ width: '450px' }} />
                <Button variant="contained" sx={{ width: '450px' }}>
                    CREATE POST
                </Button>
                {posts.slice(0, 9).map((post) => (
                    <PostItem key={post.id} title={post.title} body={post.body} id={post.id} />
                ))}
            </Stack>
        </Box>
    )
}

export default Feed