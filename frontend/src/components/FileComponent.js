import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SelectFileConponent from './SelectFileConponent'

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
                <SelectFileConponent nameTag={"Save Path"}/>
                <SelectFileConponent nameTag={"Source"}/>
            </FileContainer>
        );
    }
}

FileComponent.propTypes = {};

export default FileComponent;