import React, {Component} from 'react';
import TargetContainer from './Container/TargetContainer';
import FileContainer from './Container/FileContainer';
import StatusContainer from './Container/StatusContainer';
import ButtonContainer from './Container/ButtonContainer';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <TargetContainer/>
                <FileContainer/>
                <StatusContainer/>
                <ButtonContainer/>
            </div>
        );
    }
}

export default App;
