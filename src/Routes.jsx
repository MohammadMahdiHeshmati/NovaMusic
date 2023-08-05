import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import MainPost from "./pages/MainPost"

let Routes = [
    { path: '/', element: <Home /> },
    { path: '/post/:postID', element: <MainPost /> },
    { path: "*", element: <NotFound /> },
]

export default Routes