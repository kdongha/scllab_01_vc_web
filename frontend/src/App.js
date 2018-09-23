import React, {Component} from 'react';
import TargetContainer from './components/TargetContainer';
import FileContainer from './components/FileContainer';
import StatusContainer from './components/StatusContainer';
import ButtonContainer from './components/ButtonContainer';
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
