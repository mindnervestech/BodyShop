import React, {Component} from 'react';
import '../../../../styles/homePage/homePage.css'
import {Picture} from 'react-responsive-picture';

export default class Prompotions extends Component {
    constructor(props) {
        super(props);
    }
    render () {const { promoData } = this.props;
        console.log('this.props', this.props);
        let PromoData = {};
        if (this.props.promoData) {
        PromoData = Object.values(this.props.promoData);
        }

        return (
                <div className="content-wrapper row">
                    {PromoData.map(dataPromo =>{
                            return( <div className="col-md-4">
                                    <a href = {dataPromo.url}>
                                    <Picture className="tab" 
                                        sources = {[
                                            { srcSet :dataPromo.img, 
                                                media: "(min-width:641px)"
                                            },
                                            { srcSet :dataPromo.img_mobile
                                            }
                                        ]} />
                                    </a>
                                    </div>
                            ) } )
                    }
                </div>
        );
    }
}