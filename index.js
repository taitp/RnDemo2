import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
export default class DemoRedux2 extends Component {
    render() {
        return (
            <App />
        );
    }
}
AppRegistry.registerComponent(appName, () => App);
