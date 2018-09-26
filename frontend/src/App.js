import React, {Component} from 'react';
import TargetComponent from './components/TargetComponent';
import FileContainer from './components/FileComponent';
import ProgressComponent from './components/ProgressComponent';
import ButtonComponent from './components/ButtonComponent';
import './App.css';

class App extends Component {
    state = {
        targetList: ['원빈', '두준오빠'],
        selectedTarget: '',
        selectedSourceFile: null,
        selectedTargetFile: null,
        fileName: '',
        targetName: '',
        state: 'select',
        progress: '',
    };
    addTarget = () => {
        this.setState({
            ...this.state,
            state: 'add',
        });
    };
    cancelAddTarget = () => {
        this.setState({
            ...this.state,
            state: 'select',
        })
    };
    removeTarget = () => {
        console.log('removeTarget');
    };
    selectTarget = (e) => {
        this.setState({
            ...this.state,
            selectedTarget: e.target.innerText,
        })
    };
    insertFileName = (e) => {
        this.setState({
            ...this.state,
            fileName: e.target.value,
        })
    };
    insertTargetName = (e) => {
        this.setState({
            ...this.state,
            targetName: e.target.value,
        })
    };
    selectSourceFile = () => {
        const inputFile = document.createElement('input');
        inputFile.setAttribute('type', 'file');
        // inputFile.setAttribute("accept", ".wav");
        inputFile.onchange = () => {
            this.setState({
                ...this.state,
                selectedSourceFile: inputFile.files[0],
            })
        };
        inputFile.click();
    };

    selectTargetFile = () => {
        const inputFile = document.createElement('input');
        inputFile.setAttribute('type', 'file');
        // inputFile.setAttribute("accept", ".zip");
        inputFile.onchange = () => {
            this.setState({
                ...this.state,
                selectedTargetFile: inputFile.files[0],
            })
        };
        inputFile.click();
    };

    conversion = () => {
        if (this.state.progress === 'conversion') {
            alert('지금은 변환 중 입니다.');
        } else if (this.state.progress === 'train') {
            alert('지금은 훈련 중 입니다.');
        } else if (this.state.selectedTarget === '') {
            alert('Target을 선택해 주세요');
        } else if (this.state.fileName === '') {
            alert('File Name을 작성해 주세요');
        }  else if (this.state.selectedSourceFile === null) {
            alert('Source File을 선택해 주세요');
        } else {
            this.setState({
                ...this.state,
                progress: 'conversion'
            })
        }
};

train = () => {
    if (this.state.progress === 'conversion') {
        alert('지금은 변환 중 입니다.');
    } else if (this.state.progress === 'train') {
        alert('지금은 훈련 중 입니다.');
    } else if (this.state.targetName === '') {
        alert('Target Name을 작성해 주세요');
    }  else if (this.state.selectedTargetFile === null) {
        alert('Target File을 선택해 주세요');
    } else {
        this.setState({
            ...this.state,
            progress: 'train'
        });
    }
    console.log('train');
};

render()
{
    return (
        <div className="App">
            <TargetComponent targetList={this.state.targetList} selectedTarget={this.state.selectedTarget}
                             state={this.state.state}
                             addTarget={this.addTarget} cancelAddTarget={this.cancelAddTarget}
                             selectTarget={this.selectTarget} removeTarget={this.removeTarget}/>
            <FileContainer selectedSourceFile={this.state.selectedSourceFile}
                           selectedTargetFile={this.state.selectedTargetFile} state={this.state.state}
                           fileName={this.state.fileName} targetName={this.state.targetName}
                           insertFileName={this.insertFileName} insertTargetName={this.insertTargetName}
                           selectSourceFile={this.selectSourceFile} selectTargetFile={this.selectTargetFile}/>
            <ProgressComponent progress={this.state.progress}/>
            <ButtonComponent state={this.state.state} conversion={this.conversion} train={this.train}/>
        </div>
    );
}
}

export default App;
