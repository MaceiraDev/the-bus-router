import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Error } from "../Pages/Error";

export const AppRoutes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '*', //Indica uma pagina para ir se nada for encontrado
        element: <Error />
      }
    ]
  }
])

