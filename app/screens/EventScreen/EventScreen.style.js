import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  loadingContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 60,
  },
  errorMsg: {
    fontSize: 20,
    fontWeight: '600',
    color: '#777',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export default styles;
