import React, {Component} from 'react';
import styled from 'styled-components';

const InputFile = styled.div`
  border:2px solid lightseagreen;
  padding:0.5rem;
  font-size:1.2rem;
  border-radius:0 1.5rem 1.5rem 1.5rem;
  cursor: pointer;
`;

let inputFile;


class InputFileComponent extends Component {
    selectFile = () => {
        inputFile=document.createElement('input');
        inputFile.setAttribute('type', 'file');
        console.log(this.props.accept);
        if(this.props.accept!==undefined){
            inputFile.setAttribute("accept", "." + this.props.accept);
        }
        inputFile.click();
    };
    render() {

        return (
            <InputFile onClick={this.selectFile}>
                test
            </InputFile>
        );
    }
}

export default InputFileComponent;