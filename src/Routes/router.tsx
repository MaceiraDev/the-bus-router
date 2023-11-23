import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Error } from "../Pages/Error";
import { Transportadora } from "../Pages/Transportadora";

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
        path: '*', //Indica uma pagina para ir se nada for encontrado
        element: <Error />
      }
    ]
  }
])

