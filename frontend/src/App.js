import React, {Component} from 'react';
import TargetComponent from './components/TargetComponent';
import FileContainer from './components/FileComponent';
import StatusComponent from './components/StatusComponent';
import ButtonComponent from './components/ButtonComponent';
import './App.css';

class App extends Component {
    state = {
        targetList: ['원빈', '두준오빠'],
        selectedTarget: '',
        selectedSource: '',
        savePath: '',
        status: '',
    };
    addTarget = () => {
        console.log('addTarget');
    };
    removeTarget = () => {
        console.log('removeTarget');
    };
    selectSavePath = () => {
        console.log('selectSavePath');
    };
    selectSource = () => {
        console.log('selectSource');
    };
    selectTarget = (e) => {
        this.setState({...this.state,
            selectedTarget:e.target.innerText,
        });
        console.log('selectTarget');
    };

    render() {
        return (
            <div className="App">
                <TargetComponent targetList={this.state.targetList} selectedTarget={this.state.selectedTarget}
                                 addTarget={this.addTarget} removeTarget={this.removeTarget}
                                 selectTarget={this.selectTarget}/>
                <FileContainer/>
                <StatusComponent/>
                <ButtonComponent/>
            </div>
        );
    }
}

export default App;
