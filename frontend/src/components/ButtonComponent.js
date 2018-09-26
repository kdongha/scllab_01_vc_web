import React, {Component} from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
    width: 20%;
    height:10%;
    display: flex;
    align-items: center;
    justify-content: center;
    `;
const ActiveButton = styled.div`
    background-color:lightseagreen;
    display: block;
    text-align: center;
    vertical-align: center;
    font-size: 1.5rem;
    padding: 0.4rem 1.2rem;
    border-radius: 1.2rem;
    cursor:pointer;
    color: white;
    width: 60%;
    `;

class ButtonComponent extends Component {
    render() {
        return (
            <ButtonContainer>
                <ActiveButton onClick={this.props.state ==='select'?this.props.conversion:this.props.train}>
                    {this.props.state === 'select' ? 'conversion' : 'train'}
                </ActiveButton>
            </ButtonContainer>
        );
    }
}

export default ButtonComponent;