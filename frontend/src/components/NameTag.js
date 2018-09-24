import React, {Component} from 'react';
import PropTypes from 'prop-types';

class NameTag extends Component {
    static defaultProps = {
        name: 'Name',
    };

    render() {
        return (
            <div className='nameTag' style={this.props.style}>
                {this.props.name}
            </div>
        );
    }
}

NameTag.propTypes = {
    name: PropTypes.string,
    style: PropTypes.object,
};

export default NameTag;