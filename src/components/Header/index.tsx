import { Container } from "./style"

interface PropsHeader {
  abrirModalTrans: () => void;
  abrirModalRotas: () => void;
  abrirModalVeiculos: () => void;
  abrirModalUsuarios: () => void;
}
export const Header = (props: PropsHeader) => {
  // console.log(props.abrirModalTrans)

  return (
    <>
      <Container>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <span className="navbar-brand"><i className="bi bi-bus-front"></i></span>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/transportadoras">Transportadoras</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/rotas">Rotas</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/veiculos">Veículos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/usuarios">Usuários</a>
                </li>
              </ul>
              {/* <button
                type="button"
                className="btn-add-trans"
                onClick={props.abrirModalTrans}>
                Cadastrar Transportadora
              </button> */}
              <div className="btn-group dropstart">
                <button type="button" className="btn btn-secondary  btn-add-trans" data-bs-toggle="dropdown" aria-expanded="false">
                  <i style={{ fontSize: '12pt' }} className="bi bi-caret-left-fill"></i>  Cadastrar
                </button>
                <ul className="dropdown-menu">
                  <li className="item"><a
                    type="button"
                    onClick={props.abrirModalTrans}>
                    Transportadora
                  </a></li>
                  <li className="item"><a
                    type="button"
                    onClick={props.abrirModalRotas}>
                    Rotas
                  </a></li>
                  <li className="item"><a
                    type="button"
                    onClick={props.abrirModalVeiculos}>
                    Veículos
                  </a></li>
                  <li className="item"><a
                    type="button"
                    onClick={props.abrirModalUsuarios}>
                    Usuários
                  </a></li>
                  
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </Container>
    </>
  )
}
