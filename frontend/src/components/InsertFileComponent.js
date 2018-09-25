import React, {Component} from 'react';
import styled from 'styled-components';

const InsertFileContainer=styled.div`
  margin: 6rem 0;
`;

const NameTag=styled.div`
    color: white;
    font-size: 1.3rem;
    background: lightseagreen;
    border-radius: 1.5rem 1.5rem 0 0;
    padding: 0.3rem;
    display: block;
    text-align: center;
    width: 40%;
`;

const InputName=styled.input`
  border:2px solid lightseagreen;
  padding:0.5rem 2rem;
  font-size:1.2rem;
  border-radius:0 1.5rem 1.5rem 1.5rem;
  display:block;
  width: calc(100% - 4rem - 4px);
  &:focus{outline:none;};
`;

class InsertFileComponent extends Component {
    render() {
        return (
            <InsertFileContainer>
                <NameTag>
                    {this.props.nameTag}
                </NameTag>
                <InputName onChange={this.props.insertSaveFile}/>
            </InsertFileContainer>
        );
    }
}

export default InsertFileComponent;