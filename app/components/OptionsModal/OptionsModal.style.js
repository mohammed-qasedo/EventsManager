import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  closeIcon: {
    backgroundColor: '#9d6f74',
    height: 10,
    width: 40,
    margin: 5,
    borderRadius: 5,
  },
  innerContainer: {
    backgroundColor: '#722e33',
    padding: 15,
    elevation: 30,
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
  divider: {
    width: '100%',
    height: 0.5,
    backgroundColor: '#888',
  },
});

export default styles;
