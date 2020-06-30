import React from 'react'

const Weather = (props) => {
    return(
        <div className="container">
            <div className="cards py-4">
                <h1>{props.city}   {props.country}</h1>
                <h5 className='py-4'><i className={`wi ${props.icon} display-1`}></i></h5>
                {props.temp?<h1 className='py-4'>{props.temp}&deg;</h1>:null}
                {props.minTemp&&props.maxTemp?minmaxTemp(props.minTemp,props.maxTemp):null}
                <h4 className='py-3'>{props.desc}</h4>
            </div>
        </div>
    )
}
function minmaxTemp(min,max){
    return(
        <h3>
            <span className="px-4">{min}&deg;</span>
            <span className="px-4">{max}&deg;</span>
        </h3>
    )
}

export default Weather