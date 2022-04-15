import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  innerContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#e9e9e9',
    elevation: 5,
  },
  right: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 25,
  },
  title: {
    fontSize: 14,
    color: '#000',
  },
  info: {
    fontSize: 11,
    color: '#9d9d9d',
  },
  icon: {
    marginHorizontal: 10,
  },
});

export default styles;
