import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Error } from "../Pages/Error";
import { Transportadora } from "../Pages/Transportadora";
import { Rota } from "../Pages/Rota";
import { Veiculo } from "../Pages/Veiculo";
import { Usuario } from "../Pages/Usuario";
import { Home } from "../Pages/Home";

export const AppRoutes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
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

