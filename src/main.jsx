
import { createRoot } from 'react-dom/client'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import Wallpaper from './Pages/Wallpaper.jsx'
import './index.css'
import Portfolio from './Pages/Portfolio.jsx'
const router =createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Portfolio/>
      },
      {
        path: '/Wallpaper',
        element: <Wallpaper/>
      }
    ]

  }
])
createRoot(document.getElementById('root')).render(

    <RouterProvider router={router} />
)
