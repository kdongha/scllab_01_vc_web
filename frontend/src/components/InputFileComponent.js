import React, {Component} from 'react';
import styled from 'styled-components';

const InputFile = styled.div`
  border:2px solid lightseagreen;
  padding:0.5rem 2rem;
  font-size:1.2rem;
  border-radius:0 1.5rem 1.5rem 1.5rem;
  cursor: pointer;
`;

class InputFileComponent extends Component {
    render() {
        return (
            <InputFile onClick={this.props.selectSource}>
                {((this.props.selectedSource!==null)&&(this.props.selectedSource!==undefined)?this.props.selectedSource.name:"select...")}
            </InputFile>
        );
    }
}

export default InputFileComponent;