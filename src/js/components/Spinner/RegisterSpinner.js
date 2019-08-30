import React, { Component } from 'react';
import './Spinner.css';
import { connect } from 'react-redux';

class RegisterSpinner extends Component {
    render() {
        let component = this.props.registerSpinner ? <div className="loader">Loading...</div> : this.props.children;

        return (<>

            {component}
        </>);
    }
}

const mapStateToProps = state => {
    return {
        registerSpinner: state.spinner.registerSpinner,
    };
}

export default connect(mapStateToProps)(RegisterSpinner);