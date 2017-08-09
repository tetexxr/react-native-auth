import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
	componentWillMount() {
		firebase.initializeApp({
			apiKey: 'AIzaSyD_zILUaXJFlAKaCihMIet-fFdEyCPyS7Q',
			authDomain: 'auth-4e646.firebaseapp.com',
			databaseURL: 'https://auth-4e646.firebaseio.com',
			projectId: 'auth-4e646',
			storageBucket: 'auth-4e646.appspot.com',
			messagingSenderId: '864364719629'
		});
	}

	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				<Text>An App!</Text>
			</View>
		);
	}
}

export default App;
