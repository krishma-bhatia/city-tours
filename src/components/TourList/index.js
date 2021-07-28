import React, { Component } from 'react';
import Tour from '../Tour/tour';
import "./TourList.scss";
import { tourData } from './TourData';


export default class TourList extends Component {
    state={tours:tourData};
    closeTour=(id)=>{
        this.setState({tours:this.state.tours.filter((tour)=>{
            return (id!==tour.id)
        })})
    }
    
    render() {
        //console.log(this.state.tours)
        const {tours} = this.state;
        return (
            <section className="tourList">
                {tours.map(tour => {
                    return(
                        <Tour 
                        key={tour.id} 
                        tour={tour} 
                        closeTour={this.closeTour}
                        />
                    );
                })}
                
            </section>
        )
    }
}
