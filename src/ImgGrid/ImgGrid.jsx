import React from 'react';

import './ImgGrid.css'


const ImgGrid = (props) => {
    const {data} =props;
    return(
        <div>
           
        <div className='gridBox'>
        <div className='gridImg'>
                 {
                    data.map(ele =>
                        <div className="gridData">
                         <img src={ele.photo} />
                         <h3>{ele.title}</h3>
                         <h5>{ele.name}</h5>
                         <p>{ele.description}</p>
                         </div>
                    )
                 }
            
            </div>
            </div>    
        </div>
    );
}
export default ImgGrid;