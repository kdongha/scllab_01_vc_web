import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import InsertFileComponent from './InsertFileComponent';
import SelectFileComponent from './SelectFileComponent';

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
                <InsertFileComponent nameTag={"SaveFile Name"} file={this.props.savePath} insertSaveFile={this.props.insertSaveFile}/>
                <SelectFileComponent nameTag={"Source"} file={this.props.selectedSource} selectedSource={this.props.selectedSource} selectSource={this.props.selectSource}/>
            </FileContainer>
        );
    }
}

FileComponent.propTypes = {};

export default FileComponent;