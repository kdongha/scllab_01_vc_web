import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SelectFileComponent from './SelectFileComponent'

const FileContainer=styled.div`
    display: inline-block;
    width: calc(60% - 4rem);
    height: calc(90% - 4rem);
    padding: 2rem;
`;

class FileComponent extends Component {
    render() {
        return (
            <FileContainer>
                <SelectFileComponent nameTag={"Save Path"}/>
                <SelectFileComponent nameTag={"Source"}/>
            </FileContainer>
        );
    }
}

FileComponent.propTypes = {};

export default FileComponent;