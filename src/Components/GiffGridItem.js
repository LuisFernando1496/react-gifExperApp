import React from 'react'
//import PropTypes from 'prop-types'

const  GiffGridItem= ({title,url}) => {
   
    return (
        <div className="card animate__animated animate__fadeIn animate__delay-0.1s ">
           <img src={url} alt={title}/>
           <p>{title}</p>
        </div>
    )
}

/*GiffGridItem.propTypes = {

}*/

export default GiffGridItem

