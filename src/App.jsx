import Router from "./routes/Router"
import { CssBaseline } from "@mui/material"
import ThemeContextProvider from "./context/ThemeContext"
import PostContextProvider from "./context/PostContext"
import AuthContextProvider from "./context/AuthenContext"

function App() {

  return (
    <CssBaseline>
      <ThemeContextProvider>
        <AuthContextProvider>
          <PostContextProvider>
            <Router />
          </PostContextProvider>
        </AuthContextProvider>
      </ThemeContextProvider>
    </CssBaseline >
  )
}

export default App
