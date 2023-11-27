import Banner1 from "./../../images/banner_1.webp";
import Banner2 from "./../../images/banner_2.webp";
import Banner3 from "./../../images/banner_3.webp";
import { Container } from "./style";

export const Carrousel = () => {
  return (
    <>
      <Container>
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={Banner1} className="d-block w-100 img_banner" alt="Banner 1" />
            </div>
            <div className="carousel-item">
              <img src={Banner2} className="d-block w-100 img_banner" alt="Banner 2" />
            </div>
            <div className="carousel-item">
              <img src={Banner3} className="d-block w-100 img_banner" alt="Banner 3" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </Container>
    </>
  )
}