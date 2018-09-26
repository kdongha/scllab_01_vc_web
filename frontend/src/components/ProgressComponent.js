import React, {Component} from 'react';
import styled from 'styled-components';

const ProgressContainer=styled.div`
    height:calc(10% - 2.4rem);
    width:calc(80% - 2.4rem);
    display: inline-block;
    text-align:center;
    font-size:1.2rem;
    padding: 1.2rem;
    `;

class ProgressComponent extends Component {
    render() {
        return (
            <ProgressContainer>
                {this.props.progress===''?'':this.props.progress==='conversion'?'변환중 입니다.':'훈련중 입니다.'}
            </ProgressContainer>
        );
    }
}

export default ProgressComponent;