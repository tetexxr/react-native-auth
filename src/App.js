import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
	state = { loggedIn: null };

	componentWillMount() {
		firebase.initializeApp({
			apiKey: 'AIzaSyD_zILUaXJFlAKaCihMIet-fFdEyCPyS7Q',
			authDomain: 'auth-4e646.firebaseapp.com',
			databaseURL: 'https://auth-4e646.firebaseio.com',
			projectId: 'auth-4e646',
			storageBucket: 'auth-4e646.appspot.com',
			messagingSenderId: '864364719629'
		});

		firebase.auth().onAuthStateChanged(user => {
			if (user) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });
			}
		});
	}

	renderContent() {
		switch (this.state.loggedIn) {
			case true:
				return (
					<View style={styles.containerStyle}>
						<Button onPress={() => firebase.auth().signOut()}>
							Log Out
						</Button>
					</View>
				);
			case false:
				return <LoginForm />;
			default:
				return (
					<View style={styles.containerStyle}>
						<Spinner size="large" />
					</View>
				);
		}
	}

	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				{this.renderContent()}
			</View>
		);
	}
}

const styles = {
	containerStyle: {
		marginTop: 10,
		flexDirection: 'row'
	}
};

export default App;
