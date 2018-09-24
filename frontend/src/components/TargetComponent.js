import React, {Component} from 'react';
import styled from 'styled-components';
import TargerList from '../components/TargetList';

const TargetContainer = styled.div`
    height: calc(90% - 4rem);
    width: calc(40% - 4rem);
    display: inline-block;
    padding:2rem;
    `;

const NameTag = styled.div`
    color: white;
    font-size: 1.3rem;
    background: lightseagreen;
    border-radius: 1.5rem 1.5rem 0 0;
    padding: 0.3rem;
    display: block;
    text-align: center;
    `;

const FuncButton = styled.div`
    width: 50%;
    display:inline-block;
    text-align:center;
    border-radius:0 0 1.5rem 1.5rem;
    background-color: lightseagreen;
    color: white;
    font-size:1.3rem;
    padding:0.2rem 0;
    cursor: pointer;
    `;

class TargetComponent extends Component {
    render() {
        const {targetList, selectedTarget, addTarget, removeTarget, selectTarget} = this.props;
        return (
            <TargetContainer>
                <NameTag>
                    Target
                </NameTag>
                <TargerList targetList={targetList} selectedTarget={selectedTarget} selectTarget={selectTarget}/>
                <FuncButton onClick={addTarget}>
                    추가
                </FuncButton>
                <FuncButton onClick={removeTarget}>
                    삭제
                </FuncButton>
            </TargetContainer>
        );
    }
}

export default TargetComponent;