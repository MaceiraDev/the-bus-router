import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Error } from "../Pages/Error";
import { Transportadora } from "../Pages/Transportadora";
import { Rota } from "../Pages/Rota";
import { Veiculo } from "../Pages/Veiculo";
import { Usuario } from "../Pages/Usuario";

export const AppRoutes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/transportadoras',
        element: <Transportadora />
      },
      {
        path: '/rotas',
        element: <Rota />
      },
      {
        path: '/veiculos',
        element: <Veiculo />
      },
      {
        path: '/usuarios',
        element: <Usuario />
      },
      {
        path: '*', //Indica uma pagina para ir se nada for encontrado
        element: <Error />
      }
    ]
  }
])

