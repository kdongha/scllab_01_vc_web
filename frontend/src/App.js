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
        selectedSource: null,
        saveFileName: '',
        status: '',
    };
    addTarget = () => {
        console.log('addTarget');
    };
    removeTarget = () => {
        console.log('removeTarget');
    };
    insertSaveFile = (e) => {
        this.setState({
            ...this.state,
            saveFileName:e.target.value,
        })
    };
    selectSource = () => {
        const inputFile=document.createElement('input');
        inputFile.setAttribute('type', 'file');
        console.log(this.props.accept);
        // inputFile.setAttribute("accept", ".wav");
        inputFile.onchange=()=>{
            console.log(inputFile.files);
            this.setState({
                ...this.state,
                selectedSource:inputFile.files[0],
            })
        };
        inputFile.click();
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
                <FileContainer savePath={this.state.savePath} selectedSource={this.state.selectedSource} selectSource={this.selectSource} insertSaveFile={this.insertSaveFile}/>
                <StatusComponent/>
                <ButtonComponent/>
            </div>
        );
    }
}

export default App;
