import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Error } from "../Pages/Error";
import { Transportadora } from "../Pages/Transportadora";
import { Rota } from "../Pages/Rota";

export const AppRoutes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/transportadora',
        element: <Transportadora />
      },
      {
        path: '/rota',
        element: <Rota />
      },
      {
        path: '*', //Indica uma pagina para ir se nada for encontrado
        element: <Error />
      }
    ]
  }
])

