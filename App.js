import React from 'react';
import { Constants } from 'expo';
import { StyleSheet, Text, View } from 'react-native';
import StoryBook from './storybook';

export default class App extends React.Component {
  render() {
    switch(Constants.manifest.slug) {
      case 'react-native-expo-storybook-example-storybook':
        return <StoryBook />
      default:
        return (
          <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
          </View>
        );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
