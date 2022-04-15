import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  eventDetailsContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    marginBottom: 5,
    paddingHorizontal: 40,
  },
  eventImgContainer: {
    height: 250,
  },
  eventImg: {
    width: '100%',
    height: '100%',
  },
  time: {
    color: '#000',
    fontSize: 12,
    color: '#922222',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  title: {
    color: '#000',
    fontWeight: '400',
    fontSize: 20,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  info: {
    color: '#000',
    fontSize: 12,
    textAlign: 'center',
    textTransform: 'capitalize',
    padding: 5,
  },
});

export default styles;
