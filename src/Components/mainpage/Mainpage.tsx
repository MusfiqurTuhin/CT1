import React from 'react'
import "./Mainpage.css"
import img from "../Assets/mark.png"

const Mainpage = () => {
  return (
    <div>
      <div className="container">
        <div className="header">
            <h1>E commerce</h1>
        </div>
        <div className="subcon">
            <h3>Tide Powder</h3>
            <div className='tideimg'>
                <img src={img} alt="" />
            </div>
            <div className="tidep">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quisquam, ea quos accusamus nulla exercitationem dolorum aut delectus, 
                    quo facilis odit at voluptatum eius? 
                    Accusamus cum mollitia harum in tempora?</p>
            </div>
        </div>

        <div className="subcon">
            <h3>Tide Powder</h3>
            <div className='tideimg'>
                <img src={img} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quisquam, ea quos accusamus nulla exercitationem dolorum aut delectus, 
                    quo facilis odit at voluptatum eius? 
                    Accusamus cum mollitia harum in tempora?</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Mainpage
