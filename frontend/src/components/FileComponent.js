import React, {Component} from 'react';
import styled from 'styled-components';

import InsertNameComponent from './InsertNameComponent';
import SelectFileComponent from './SelectFileComponent';

const FileContainer = styled.div`
    display: inline-block;
    width: calc(60% - 4rem);
    height: calc(90% - 4rem);
    padding: 2rem;
`;

class FileComponent extends Component {
    render() {
        return (
            <FileContainer>
                <InsertNameComponent fileName={this.props.fileName} targetName={this.props.targetName}
                                     state={this.props.state} insertFileName={this.props.insertFileName}
                                     insertTargetName={this.props.insertTargetName}/>
                <SelectFileComponent selectedSourceFile={this.props.selectedSourceFile}
                                     selectedTargetFile={this.props.selectedTargetFile} state={this.props.state}
                                     selectSourceFile={this.props.selectSourceFile}
                                     selectTargetFile={this.props.selectTargetFile}/>
            </FileContainer>
        );
    }
}


export default FileComponent;