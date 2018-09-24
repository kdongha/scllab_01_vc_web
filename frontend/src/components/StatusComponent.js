import React, {Component} from 'react';
import styled from 'styled-components';

const StatusContainer=styled.div`
    height:10%;
    width:80%;
    background-color:green;
    display: inline-block;
    `;

class StatusComponent extends Component {
    render() {
        return (
            <StatusContainer>
                Status :
            </StatusContainer>
        );
    }
}

export default StatusComponent;