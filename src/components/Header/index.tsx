import { Container } from "./style"

interface PropsHeader {
  abrirModalTrans: () => void;
}
export const Header = (props: PropsHeader) => {
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
                  <a className="nav-link active" aria-current="page" href="/transportadora">Transportadoras</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/rota">Rotas</a>
                </li>

              </ul>
            </div>
            <div>
              <button
                type="button"
                className="btn-add-trans"
                onClick={props.abrirModalTrans}>
                Cadastrar Transportadora
              </button>
            </div>
          </div>
        </nav>
      </Container>
    </>
  )
}
