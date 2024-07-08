import Image from "next/image";
import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
 <>
 <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Logo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Service
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Service</a></li>
            <li><a className="dropdown-item" href="#">Service</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Contact </a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <button className="btn btn-outline-success" type="submit">Sing In</button>
        <button className="btn btn-outline-success" type="submit">Sing</button>
      </form>
    </div>
  </div>
</nav>
<div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://img.freepik.com/free-photo/fuji-mountain-with-milky-way-night_335224-104.jpg?w=1380&t=st=1720413970~exp=1720414570~hmac=5ee46c665b4c0c4240176f07331175937c9a18916f6431cdbf7aab2ea225fff1" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://m.media-amazon.com/images/I/51y8GUVKJoL.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://t3.ftcdn.net/jpg/02/35/78/96/360_F_235789662_9tKzoDqDUHh6ctZQ2pSWFTKnuBuZmBwl.jpg" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
<br></br>
<div className="row">
      <div className="col-4 text center" >
          <div className="card" style={{width: '25rem'}}>
           <img src="https://cms-b-assets.familysearch.org/dims4/default/b27779d/2147483647/strip/true/crop/856x535+0+0/resize/800x500!/quality/90/?url=https%3A%2F%2Ffamilysearch-brightspot.s3.amazonaws.com%2F36%2F6b%2Fe9b21c5155646968c4a562b1f989%2Fjapanese-woman-with-kimono-fashion.jpeg"width="50" height={285} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
          </div>
              </div>
      <div className="col-4 text center" >
          <div className="card" style={{width: '25rem'}}>
            <img src="https://www.pdx.edu/world-languages/sites/worldlanguages.web.wdt.pdx.edu/files/2020-08/wll-japanese.jpg" width="50" height={285} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
          </div>
              </div>
      <div className="col-4 text center" >
          <div className="card" style={{width: '25rem'}}>
            <img src="https://i0.wp.com/blog.eternal3d.com/wp-content/uploads/2024/02/The-Best-3-Famous-Japanese-Art-photo.png?w=1000&ssl=1" width="50" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
          </div>
              </div>
   <div className="container">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
      <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
        <svg className="bi" width={30} height={24}><use xlinkHref="#bootstrap" /></svg>
      </a>
      <span className="mb-3 mb-md-0 text-body-secondary">© 2024 Company, Inc</span>
    </div>
    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#twitter" /></svg></a></li>
      <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#instagram" /></svg></a></li>
      <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#facebook" /></svg></a></li>
    </ul>
  </footer>
</div>
</div>
   
</>
  );
}

