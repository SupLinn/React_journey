    import React from "react"
    import ReactDOM from "react-dom/client"
    import Header from "./components/Header"
    import Body from "./components/Body"
    import {createBrowserRouter, RouterProvider, Outlet} from "react-router"
    import About from "./components/About"
    import Contact from "./components/Contact"
    import Error from "./components/Error"
   
    const App = () => {
        return (
            <div className="app">
                <Header />
                <Outlet />
            </div>
        )
        
    }

    const appRouter = createBrowserRouter([
        {
            path : "/",
            element : <App/>,
            children : [
                {
                    path : "/",
                    element : <Body/>
                },
                {
                    path : "/about",
                    element : <About />
                },
                {
                    path : "contact",
                    element : <Contact/>
                }
            ],
            errorElement : <Error/>
        },
    ])

    const root = ReactDOM.createRoot(document.getElementById("root"))

    root.render(<RouterProvider router={appRouter}/>)