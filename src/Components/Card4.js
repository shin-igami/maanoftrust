import React from 'react'
import "../Styles/Card4.css";

const cardimage = require('../image/cardimg.jpg')


function Card4() {

  // const divStyle = {
  //     width: '20rem',
  //     margin: '0 45px'
  //   };
  return (
    <>
        <div className="card divstyle card-coloums">
          <img src={cardimage} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/" className="btn btn-info">Go somewhere</a>
          </div>
        </div>
    </>
  )
}

export default Card4
