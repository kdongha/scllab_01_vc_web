import React, {Component} from 'react';
import styled from 'styled-components';

const SelectFileContainer = styled.div`
  margin: 6rem 0;
`;

const NameTag = styled.div`
    color: white;
    font-size: 1.3rem;
    background: lightseagreen;
    border-radius: 1.5rem 1.5rem 0 0;
    padding: 0.3rem;
    display: block;
    text-align: center;
    width: 40%;
`;

const InputFile = styled.div`
  border:2px solid lightseagreen;
  padding:0.5rem 2rem;
  font-size:1.2rem;
  border-radius:0 1.5rem 1.5rem 1.5rem;
  cursor: pointer;
`;

class SelectFileComponent extends Component {
    render() {
        return (
            <SelectFileContainer>
                <NameTag>
                    {this.props.state === 'select' ? 'Select Source' : 'Select Target'}
                </NameTag>
                <InputFile onClick={this.props.state === 'select'?this.props.selectSourceFile:this.props.selectTargetFile}>
                    {this.props.state === 'select' ? this.props.selectedSourceFile !== null && this.props.selectedSourceFile !== undefined ? this.props.selectedSourceFile.name : 'Select ...' : this.props.selectedTargetFile !== null && this.props.selectedTargetFile !== undefined ? this.props.selectedTargetFile.name : 'Select ...'}
                </InputFile>
            </SelectFileContainer>
        );
    }
}

export default SelectFileComponent;