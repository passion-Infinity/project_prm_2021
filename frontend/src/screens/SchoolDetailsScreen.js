import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  StatusBar,
  Platform,
  Linking,
  TouchableOpacity,
} from 'react-native';
import {
  ImageHeaderScrollView,
  TriggeringView,
} from 'react-native-image-header-scroll-view';

import * as Animatable from 'react-native-animatable';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Card from '../components/Card';

const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 80;
const MAX_HEIGHT = 275;

export default function SchoolDetailsScreen({route}) {
  const data = route.params.data;
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = event => {
    setScrollY(event.nativeEvent.contentOffset.y);
  };
  const renderMajorInfo = (data, index) => {
    return <Card key={index} data={data} />;
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageHeaderScrollView
        onScroll={handleScroll}
        maxHeight={MAX_HEIGHT}
        minHeight={MIN_HEIGHT}
        overScrollMode="never"
        overlayColor="#7e54ab"
        maxOverlayOpacity={1}
        minOverlayOpacity={0}
        renderHeader={() => (
          <Image
            source={{
              uri: data.image,
            }}
            style={styles.image}
          />
        )}
        renderFixedForeground={() => (
          <Text numberOfLines={2} style={styles.navTitle}>
            {scrollY >= 260 ? data.name : ''}
          </Text>
        )}>
        <View style={styles.main_content}>
          <Text style={styles.title}>{data.name}</Text>
          <View style={styles.horizontalLine}></View>
          <View style={styles.intro}>
            <Text style={styles.intro_desc}>{data.description}</Text>
            <View style={styles.intro_contact}>
              <FontAwesome5 name="phone" size={16} color="#333" />
              <Text style={[styles.intro_address, {color: '#333'}]}>
                {data.phone}
              </Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                Linking.openURL(data.link);
              }}>
              <View style={styles.intro_contact}>
                <FontAwesome5 name="link" size={16} color="#333" />
                <Text style={styles.intro_link}>{data.link}</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.intro_contact}>
              <FontAwesome5 name="map-marker-alt" size={16} color="#333" />
              <Text style={styles.intro_address}>{data.address}</Text>
            </View>
          </View>
          <View style={styles.main_major}>
            <View style={styles.card_title}>
              <Text
                style={[
                  styles.card_title_text,
                  {
                    flex: 2,
                    borderRightWidth: 1,
                  },
                ]}>
                Tên ngành
              </Text>
              <Text
                style={[
                  styles.card_title_text,
                  {
                    flex: 1,
                    textAlign: 'center',
                  },
                ]}>
                Điểm chuẩn
              </Text>
            </View>
            {data.majorInfo.map((item, index) => renderMajorInfo(item, index))}
          </View>
        </View>
      </ImageHeaderScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main_content: {
    flex: 1,
  },
  horizontalLine: {
    position: 'relative',
    width: '80%',
    borderColor: '#aaa',
    borderBottomWidth: 1,
    top: 15,
    left: 40,
  },
  image: {
    height: MAX_HEIGHT,
    width: Dimensions.get('window').width,
    resizeMode: 'contain',
  },
  title: {
    width: 350,
    fontSize: 23,
    fontWeight: 'bold',
    color: '#333',
    paddingLeft: 10,
    marginTop: 10,
  },
  navTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    lineHeight: MIN_HEIGHT,
    paddingLeft: 10,
    textTransform: 'uppercase',
  },
  intro: {
    marginTop: 40,
    paddingHorizontal: 10,
  },
  main_major: {
    marginTop: 40,
  },
  card_title: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#ddd',
    paddingVertical: 10,
  },
  card_title_text: {
    fontWeight: '700',
    fontSize: 18,
    color: '#333',
  },
  intro_desc: {
    fontSize: 15,
    marginBottom: 10,
  },
  intro_address: {
    color: 'tomato',
    fontWeight: '500',
    fontSize: 14,
    marginLeft: 10,
  },
  intro_link: {
    textDecorationLine: 'underline',
    marginLeft: 10,
    color: '#2e7ef0',
    fontSize: 14,
  },
  intro_contact: {
    flexDirection: 'row',
    marginTop: 10,
  },
});
