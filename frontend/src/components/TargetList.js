import React, {Component} from 'react';
import styled from 'styled-components';

const TargetListContainer = styled.div`
    width: calc(100% - 4px);
    height: 90%;
    border: 2px solid lightseagreen;
    margin: auto;
    `;

const Target = styled.li`
    text-align: left;
    margin: 0.8rem 1rem;
    background-color: ${props => props.select? "lightblue" : "white"};
    cursor: pointer;
    `;

class TargetList extends Component {
    render() {
        const targetList = this.props.targetList.map(
            (name, index) => (<Target select={this.props.selectedTarget===name} key={index} onClick={this.props.selectTarget}>{name}</Target>)
        );

        return (
            <TargetListContainer>
                {targetList}
            </TargetListContainer>
        );
    }
}

export default TargetList;