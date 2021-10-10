import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import AreaScreen from './AreaScreen';

export default function HomeScreen({navigation, router}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.header_top}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <FontAwesome5 name={'chevron-left'} size={22} color={'#333'} />
          </TouchableOpacity>
          <FontAwesome5 name={'list'} size={22} color={'#333'} />
        </View>
        <Text style={styles.title}>Select a region</Text>
      </View>
      <ScrollView>
        <View style={styles.body}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('AreaScreen');
            }}>
            <View style={[styles.card, {backgroundColor: '#36b57b'}]}>
              <View style={styles.card_left}>
                <Text style={styles.card_title}>Khu vực miền Bắc</Text>
              </View>
              <View style={styles.card_right}>
                <Image
                  style={styles.img}
                  source={require('../../assets/images/chua-mot-cot.jpg')}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={[styles.card, {backgroundColor: '#f2c318'}]}>
              <View style={styles.card_left}>
                <Text style={styles.card_title}>Khu vực miền Trung</Text>
              </View>
              <View style={styles.card_right}>
                <Image
                  style={styles.img}
                  source={require('../../assets/images/hoi-an.jpg')}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={[styles.card, {backgroundColor: '#f4655f'}]}>
              <View style={styles.card_left}>
                <Text style={styles.card_title}>Khu vực miền Nam</Text>
              </View>
              <View style={styles.card_right}>
                <Image
                  style={styles.img}
                  source={require('../../assets/images/tphcm.jpg')}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingLeft: 10,
    paddingTop: 15,
    paddingBottom: 40,
  },
  header_top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 20,
  },
  body: {
    alignItems: 'center',
    paddingBottom: 100,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#000',
    marginLeft: 20,
    position: 'relative',
    top: 15,
  },
  card: {
    flexDirection: 'row',
    width: '95%',
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    opacity: 0.85,
  },
  card_left: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card_right: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card_title: {
    paddingLeft: 10,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff',
    fontWeight: '600',
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
