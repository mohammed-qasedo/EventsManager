import React, {useState, useEffect} from 'react';
import {View, ScrollView, ActivityIndicator} from 'react-native';
import styles from './EventScreen.style';
import Avatar from '../../components/Avatar/Avatar';
import HorizontalList from '../../components/HorizontalList/HorizontalList';
import ScreenHeader from '../../components/ScreenHeader/ScreenHeader';
import EventHeader from '../../components/EventHeader/EventHeader';
import EventButtons from '../../components/EventButtons/EventButtons';
import EventDetails from '../../components/EventDetails/EventDetails';
import Rating from '../../components/Rating/Rating';
import Search from '../../components/Search/Search';
import QRCode from '../../components/QRCode/QRCode';
import OptionsModal from '../../components/OptionsModal/OptionsModal';
import EventMoreInfo from '../../components/EventMoreInfo/EventMoreInfo';
import {members} from '../../data/appData';
import {loadEvents} from '../../api/EventsApi';
import {useDispatch, useSelector} from 'react-redux';

const EventScreen = ({eventID}) => {
  const [pressedButton, setPressedButton] = useState('interested');
  const [goingValue, setGoingValue] = useState(2);
  const [interestedValue, setInterestedValue] = useState(76);
  const [modalVisible, setModalVisible] = useState(false);
  const [event, setEvent] = useState(null);
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const {loading, events} = useSelector(state => state.eventsReducer);

  const handlePressButton = id => {
    if (pressedButton != id) {
      setPressedButton(id);
    }
    if (id == 'going') {
      setGoingValue(prevValue => prevValue + 1);
    } else {
      setInterestedValue(prevValue => prevValue + 1);
    }
  };

  useEffect(() => loadEvents(dispatch), []);

  useEffect(() => {
    console.log('loading... ', loading);
  }, [loading]);

  useEffect(() => {
    setError(false);
    if (events?.length > 0) {
      let event = events.find(event => event.id == eventID);
      if (event) {
        setEvent(event);
      } else {
        setError(true);
      }
    }
  }, [events]);

  return error ? (
    <View style={styles.loadingContainer}>
      <Text style={styles.loadingContainer}>
        Something Went Wrong While Loading The Event
      </Text>
    </View>
  ) : loading ? (
    <View style={styles.loadingContainer}>
      <ActivityIndicator color="#722e33" size={50} />
    </View>
  ) : (
    <View style={styles.screen}>
      <ScreenHeader
        title="events"
        backIcon={require('../../assets/asset47.png')}
        optionsIcon={require('../../assets/asset21.png')}
        onPressBack={() => console.log('Hello Wrold!!')}
        onPressOptions={() => setModalVisible(true)}
      />
      <ScrollView>
        <EventHeader
          event={{
            title: 'business development confrence expert',
            time: 'july 16th pm utc + 04 - july 19th',
            info: 'online event',
            imgUri: require('../../assets/event-background.jpg'),
          }}
        />
        <Rating />
        <EventButtons
          items={[
            {
              title: 'going',
              value: goingValue,
              hovered: pressedButton == 'going',
              onPress: handlePressButton,
            },
            {
              title: 'interested',
              value: interestedValue,
              hovered: pressedButton == 'interested',
              onPress: handlePressButton,
            },
          ]}
        />
        <QRCode />
        <EventDetails event={event} />
        <EventMoreInfo />
        <Search />
        <HorizontalList
          items={members}
          renderItem={({item}) => (
            <Avatar
              name={item.name}
              imgUri={require('../../assets/malika.jpg')}
            />
          )}
        />
      </ScrollView>
      <OptionsModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        onPressEdit={() => console.log('edit')}
        onPressCancel={() => console.log('cancel')}
        onPressDelete={() => console.log('delete')}
      />
    </View>
  );
};

export default EventScreen;
