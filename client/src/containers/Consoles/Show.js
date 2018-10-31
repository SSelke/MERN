import React, { Component } from 'react';
import { connect } from 'react-redux';

class Show extends Component {
    render() {
        return (
            <div className="d-block w-100">
                
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(Show);