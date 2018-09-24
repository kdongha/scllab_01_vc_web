import React, {Component} from 'react';
import styled from 'styled-components';

const ActiveButton=styled.div`
    background-color:yellow;
    width: 20%;
    height:10%;
    display: inline-block;
    `;
class ButtonComponent extends Component {
    render() {
        return (
            <ActiveButton>
                ButtonContainer
            </ActiveButton>
        );
    }
}

export default ButtonComponent;