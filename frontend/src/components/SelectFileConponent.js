import React, {Component} from 'react';
import PropTypes from 'prop-types';

import NameTag from './NameTag'
import SelectFile from './SelectFile'

class SelectFileConponent extends Component {
    render() {
        const {nameTag} = this.props;
        return (
            <div>
                <NameTag name={nameTag}/>
                <SelectFile/>
            </div>
        );
    }
}

SelectFileConponent.propTypes = {
    nameTag: PropTypes.string,
};

export default SelectFileConponent;