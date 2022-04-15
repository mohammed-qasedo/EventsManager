import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  innerContainer: {
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#666',
    elevation: 3,
  },
  placeholder: {
    color: '#000',
  },
  input: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    flex: 1,
    fontSize: 16,
    textAlignVertical: 'center',
    color: '#932222',
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  invite: {
    color: '#932222',
    marginEnd: 15,
  },
});

export default styles;
