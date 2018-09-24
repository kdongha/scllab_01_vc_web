import React, {Component} from 'react';
import '../css/TargetContainer.css';

import NameTag from '../components/NameTag';
import TargerList from '../components/TargetList';
import FuncButton from '../components/FuncButton';


class TargetContainer extends Component {
    render() {
        const funButtonStyle = {
            width: "50%",
            display: "inline-block",
            textAlign: "center",
            borderRadius: "0 0 1.5rem 1.5rem",
            backgroundColor: "lightseagreen",
            color: "white",
            fontSize: "1.3rem",
            padding:"0.3rem 0",
            cursor:"pointer",
        };

        const nameTagStyle = {
            color: 'white',
            fontSize: '1.3rem',
            background: 'lightseagreen',
            borderRadius: '1.5rem 1.5rem 0 0',
            padding: '0.3rem',
            display: 'block',
            textAlign: 'center',
        };

        return (
            <div className="TargetContainer">
                <NameTag name='Target' style={nameTagStyle}/>
                <TargerList/>
                <FuncButton name='추가' style={funButtonStyle}/>
                <FuncButton name='삭제' style={funButtonStyle}/>
            </div>
        );
    }
}

export default TargetContainer;