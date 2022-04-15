import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import EventScreen from './app/screens/EventScreen/EventScreen';

const App = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#ffffff', flex: 1}}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <EventScreen eventID={1} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
