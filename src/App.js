import React, {Component} from 'react';
import TextInput from './components/TextInput';
import './App.css';

class App extends Component {
    render () {
        return (
            <div className="App">
                <h1>HOC Component Example</h1>
                <br />

                <TextInput />
                <TextInput />
                <TextInput />
            </div>
        );
    }
}

export default App;
