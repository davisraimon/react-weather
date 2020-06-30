import React, { Component } from 'react';

const Form = (props) => {
    return(
        <div className='container py-4'>
            <div>{props.error?error():null}</div>
            <div>{props.invalid?invalid():null}</div>
            <form onSubmit={props.getWeather}>
            <div className="row">
                <div className="col-md-3 offset-md-4 py-1">
                    <input type='text' className='form-control' name='city' autoComplete='off' placeholder="City"></input>
                </div>
                <div className="col-md-3 py-1">
                    <button className='btn btn-primary mt-md-0 text-md-left'>Get Weather</button>
                </div>
            </div>
            </form>
        </div>
    )
}

function error(){
    return(
        <div className="alert alert-warning mx5" role="alert">
            Please Enter a City
        </div>
    )
}
function invalid(){
    return(
        <div className="alert alert-danger mx5" role="alert">
            Please Enter a Valid City
        </div>
    )
}
export default Form;