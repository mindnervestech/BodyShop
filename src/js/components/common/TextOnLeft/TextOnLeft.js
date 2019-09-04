import React, { Component } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './TextOnLeft.css';

export default class TextOnLeft extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        console.log('this.props', this.props);
        return (
                <Row className="paddingTop20 reverse-content">
                    <Col xs={12} lg={6} md={12} className="padding20">
                        <span>
                            {this.props.text}
                        </span>
                    </Col>
                    <Col xs={12} lg={6} md={12}>
                        <img className="imgWidth" src={this.props.imageSrc} alt="Smiley face"/>
                    </Col>
                </Row>
        );
    }
}  