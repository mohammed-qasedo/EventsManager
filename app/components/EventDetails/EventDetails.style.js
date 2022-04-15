import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    borderTopColor: '#ccc',
    borderBottomColor: '#ccc',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
  },
  item: {
    padding: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  icon: {
    width: 15,
    height: 15,
    marginTop: 2,
  },
  text: {
    fontSize: 14,
    color: '#000',
    textTransform: 'capitalize',
    paddingHorizontal: 10,
  },
});

export default styles;
