import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import School from '../components/School';
import {data} from '../models/data';

export default function AreaScreen({navigation}) {
  const renderData = data => {
    return (
      <School
        key={data.id}
        data={data}
        onPress={() => navigation.navigate('SchoolDetailsScreen', {data})}
      />
    );
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.header_left}>
            <FontAwesome5 name={'stream'} size={22} color={'#000'} />
            <Text style={styles.header_left_text}>Lựa chọn của bạn</Text>
          </View>
          <View style={styles.header_right}>
            <FontAwesome5 name={'ellipsis-v'} size={22} color={'#000'} />
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.search_wrapper}>
            <View style={styles.search}>
              <TextInput
                style={styles.search_input}
                placeholder="Nhập tên trường, tên ngành..."
              />
              <FontAwesome5
                style={styles.search_icon}
                name="search"
                size={16}
                color="#000"
              />
            </View>
          </View>
          <ScrollView>
            <View style={styles.school}>
              {data.map(item => renderData(item))}
            </View>
          </ScrollView>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfcfc',
    paddingBottom: 150,
  },
  header: {
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 20,
    paddingTop: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header_left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  header_left_text: {
    marginLeft: 20,
    fontSize: 25,
    color: '#333',
  },
  body: {},
  search_wrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    paddingBottom: 20,
  },
  search: {
    width: '85%',
    height: 50,
  },
  search_input: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
    paddingLeft: 40,
    fontSize: 16,
    color: '#000',
    borderBottomWidth: 3,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 0.5,
    borderColor: '#ccc',
    borderTopColor: '#ddd',
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  search_icon: {
    position: 'absolute',
    top: 18,
    left: 15,
  },
  school: {
    marginTop: 20,
    alignItems: 'center',
  },
});
