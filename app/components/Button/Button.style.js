import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#ddd',
    margin: 5,
    backgroundColor: '#fff',
    elevation: 5,
  },
  hovered: {
    borderWidth: 3,
    borderColor: '#932222',
  },
  title: {
    fontSize: 12,
    color: '#000',
    textTransform: 'capitalize',
  },
  value: {
    color: '#932222',
    fontWeight: '400',
    fontSize: 18,
    textTransform: 'capitalize',
  },
});

export default styles;
