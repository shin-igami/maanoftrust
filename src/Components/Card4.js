import React from 'react'
import "../Styles/Card4.css";




function Card4(props) {

 
  return (
    <>
        <div className="card divstyle card-coloums">
          <img src={props.cardimage} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.Title}</h5>
            <p className="card-text">{props.content}</p>
            <a href="/" className="btn btn-dark">Go somewhere</a>
          </div>
        </div>
    </>
  )
}

export default Card4
