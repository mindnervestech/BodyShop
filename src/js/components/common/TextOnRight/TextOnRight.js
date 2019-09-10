import React, { Component } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './TextOnRight.css';
import '../../../../styles/App.css'

export default class TextOnRight extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        console.log('this.props', this.props);
        return (<div>
                <br />
                <div className="header4 centre">
                <br />
                   {this.props.heading}
                </div>
                <br />
                <div className="row nopadding">
                <br />
                    <div className="col-md-6 nopadding">
                        <img className="imgWidth" src={this.props.imageSrc} className="imgSize" />
                    </div>
                    <div className="col-md-1" />
                    <div className="col-md-5 textBox">
                        <br /><br /><br />
                        <p>
                        
                            {this.props.text}
                        </p>
                        <br />
                        <p>
                            {this.props.text2}
                        </p>
                    </div>
                </div>
                </div>
        );
    }
}  