import { createBrowserRouter, RouterProvider } from "react-router"
import UserForm from './components/UserForm.jsx'
import { createRoot } from 'react-dom/client'
import Home from './components/Home.jsx'
import { StrictMode } from 'react'
import App from './App.jsx'
import { Provider } from "react-redux"
import store from "./redux/store.js"

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <UserForm/>
      },
      {
        path: "/home",
        element: <Home/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider store={store}>
     <RouterProvider router={routes}/>
   </Provider>
  </StrictMode>,
)
