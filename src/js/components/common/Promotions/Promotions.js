import React, {Component} from 'react';
import '../../../../styles/homePage/homePage.css'


export default class Prompotions extends Component {
    constructor(props) {
        super(props);
    }
    render () {const { promoData } = this.props;
        console.log('this.props', this.props);
        return (
                <div className="content-wrapper row">
                    {promoData.map(dataPromo =>{
                            return( <div className="col-md-4">
                                    <a href = {dataPromo.link}>
                                    <img src = {dataPromo.url} className="tab" />
                                    </a>
                                    </div>
                            ) } )
                    }
                </div>
        );
    }
}