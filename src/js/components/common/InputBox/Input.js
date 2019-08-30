import React, { Component } from 'react'
import "./Input.css";
export default class Input extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        const { placeholder, required } = this.props;

        return (
            <div style={{position: 'relative'}}>
                <input type="text" class="inputText" style={{width: '300px'}} required={required}/>
                <span class="floating-label">{ placeholder }</span>
            </div>
        );
    }
}  