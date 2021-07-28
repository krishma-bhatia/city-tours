import React, { Component } from 'react'
import './tour.scss';

export default class Tour extends Component {
    state={showInfo:false}
    handleClick = () => {
        this.setState({showInfo:!this.state.showInfo});
        console.log(this.state.showInfo)
        console.log(this.props.tour.id)
    }
    handleClose = () => {
        this.props.closeTour(this.props.tour.id);
    }
    render() {
        const {img, city, name, info} = this.props.tour;
        const showInfo = this.state.showInfo;
        console.log("in render" + showInfo + city)
        return (
            <article className="tour" >
                <div className="img-container">
                    <img 
                    src={img} alt={city}/>
                
                <span onClick={this.handleClose} className="close-btn">
                    <i className="fa fa-window-close"></i>
                </span>
                </div>
                <div className="tour-info">
                    <h3>{city}</h3>
                    <h4>{name}</h4>
                    <h5>Details<span onClick = {this.handleClick}><i className="fa fa-caret-square-down"></i></span></h5>
                    {showInfo && <span>{info}</span>}
                </div>
            </article>
        )
    }
}
