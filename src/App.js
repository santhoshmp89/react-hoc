import React, {Component} from 'react';
import TextInput from './components/TextInput';

import LocalStorageHOC from './components/LocalStorageHOC';
import HomePage from './components/Homepage';
import './App.css';

const menus = [
    {
        name: 'Home',
        link: '#',
    },
    {
        name: 'About Us',
        link: 'about-us',
    },
    {
        name: 'Contact Us',
        link: 'contact-us',
    },
];

const HomePageLocalStrage = LocalStorageHOC (HomePage, menus);

class App extends Component {
    render () {
        return (
            <div className="App">
                <h1>HOC Component Example</h1>
                <br />

                <TextInput />
                <TextInput />
                <TextInput />

                <br />
                <hr />

                <HomePageLocalStrage />

            </div>
        );
    }
}

export default App;
