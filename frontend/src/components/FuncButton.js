import React, {Component} from 'react';
import PropTypes from 'prop-types';

import '../css/FuncButton.css';

class FuncButton extends Component {
    render() {
        return (
            <div className='funcButton' style={this.props.style}>
                {this.props.name}
            </div>
        );
    }
}

FuncButton.propTypes = {
    name: PropTypes.string,
};

export default FuncButton;