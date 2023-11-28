import { Container } from "./style"
import img1 from "./../../images/footer_1.jpeg";
import img2 from "./../../images/footer_2.jpeg";

export const Home = () => {
  return (
    <>
      <Container>
        <div className='container'>
          <div className='row'>
            <div className=" col-md-4">
              <div className="div-left">
                <img src={img1} className="d-block w-100 img_1" alt="IMG BUS" />
              </div>
            </div>
            <div className='div-center col-md-4'>
              <h1>Bem <span>Vindo</span></h1>
            </div>
            <div className='div-center col-md-4'>
              <div className="div-right">
                <img src={img2} className="d-block w-100 img_2" alt="IMG BUS" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
