import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  container: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
    marginVertical: 3,
    elevation: 5,
  },
  img: {
    width: '100%',
    height: '100%',
  },
  name: {
    fontSize: 10,
    color: '#000',
    textTransform: 'capitalize',
  },
});

export default styles;
