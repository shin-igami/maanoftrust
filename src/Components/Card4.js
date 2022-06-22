import React from 'react'
import "../Styles/Card4.css";

import {Link} from 'react-router-dom'


function Card4(props) {

 
  return (
    <>
        <div className="card divstyle card-coloums">
          <img src={props.cardimage} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.Title}</h5>
            <p className="card-text">{props.content}</p>
            <Link className="link btn btn-dark" to={props.link} >Click Here</Link>
          </div>
        </div>
    </>
  )
}

export default Card4
