import Router from "./routes/Router"
import ThemeContextProvider from "./context/ThemeContext"
import PostContextProvider from "./context/PostContext"
import AuthContextProvider from "./context/AuthenContext"

function App() {

  return (
    <ThemeContextProvider>
      <AuthContextProvider>
        <PostContextProvider>
          <Router />
        </PostContextProvider>
      </AuthContextProvider>
    </ThemeContextProvider>
  )
}

export default App
