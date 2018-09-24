import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InputFileComponent from './InputFileComponent'

const SelectFileContainer=styled.div`
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
    width: 30%;
`;

class SelectFileComponent extends Component {
    render() {
        const {nameTag} = this.props;
        return (
            <SelectFileContainer>
                <NameTag>
                    {nameTag}
                </NameTag>
                <InputFileComponent/>
            </SelectFileContainer>
        );
    }
}

SelectFileComponent.propTypes = {
    nameTag: PropTypes.string,
};

export default SelectFileComponent;