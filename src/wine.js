import React from 'react'
import { ReactDOM } from 'react'
import './winecss.css'

class Wine extends React.Component{
    render(){
        let message = "Нет в наличии"
        if(this.props.isInStock){
            message = " "
        }
        return(
            <div className='maindiv'>
                <p>{message}</p>
                <h1>{this.props.title}</h1>
                <p>{this.props.description}</p>
                <h5>{this.props.rating}</h5>
                {this.props.like ? <p>&#128148;</p> : null}
            </div>
        )
    }
}

export default Wine