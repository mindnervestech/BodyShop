import React, {Component} from 'react';
import Home from '../../../../styles/homePage/homePage.css'


export default class Prompotions extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        console.log('this.props', this.props);
        return (
                <div className="col-md-4 nopadding content-wrapper ">
                    <a href={this.props.promoRouteLink}>
                     <img src={this.props.promoImg} className="tab"/>
                    </a>
                </div>
        );
    }
}