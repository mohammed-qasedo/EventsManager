import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    width: '100%',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '300',
    textAlign: 'center',
    textAlignVertical: 'center',
    textTransform: 'capitalize',
  },
  bordered: {
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
});

export default styles;
