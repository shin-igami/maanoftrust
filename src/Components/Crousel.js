import React from 'react'
import '../Styles/Crousel.css'
const Crousel = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://wallpaperaccess.com/full/1579893.jpg" className="d-block w-100" data-bs-interval="4000" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <a href="https://rzp.io/l/CcCG1qOV3" className="btn red-btn" >Donate Now</a>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://img.freepik.com/free-vector/perspective-japanese-street-neon-lights_52683-44988.jpg?w=2000" className="d-block w-100" data-bs-interval="4000" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW5pbWUlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&w=1000&q=80" className="d-block w-100" data-bs-interval="4000" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Crousel