import React, {Component} from 'react';
import PropTypes from 'prop-types';

import '../css/TargetList.css';

class TargetList extends Component {
    static defaultProps={
        targetList:['원빈','두준오빠'],
    };

    constructor(props) {
        super(props);
        this.state={
            select:-1,
        }
    }

    selectTartet=(index)=>{
        this.setState({
            select:index,
        })
    };

    render() {
        const targetList=this.props.targetList.map(
            (name,index) => (<li key={index} className={(this.state.select===index?"selectedTarget":null)} onClick={()=>{this.selectTartet(index)}}>{name}</li>)
        );

        return (
            <div className='targetList'>
                {targetList}
            </div>
        );
    }
}

TargetList.propTypes = {
    targetList:PropTypes.array,
};

export default TargetList;