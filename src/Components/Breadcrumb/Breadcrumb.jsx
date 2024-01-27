import React from 'react';
import "./Breadcrumb.css";
import arrow_icon from "../Assets/icons/breadcrum_arrow.png"


function Breadcrumb({product}) {

    return (
        <div className='breadcrumb'>
            HOME <img src={arrow_icon} alt="arrIcon" />
            SHOP <img src={arrow_icon} alt="arrIcon" />
            {product.category}
             <img src={arrow_icon} alt="arrIcon" />
            {product.name}
        </div>
    )
}

export default Breadcrumb
