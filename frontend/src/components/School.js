import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

export default function School() {
  return (
    <TouchableOpacity activeOpacity={0.6}>
      <View style={styles.card}>
        <View style={styles.card_top}>
          <View style={styles.card_left}>
            <Image
              style={styles.img}
              source={{
                uri: 'https://media.publit.io/file/truong-dai-hoc-fpt-tp-hcm-1.jpg?fbclid=IwAR16cWCEg-Ef7UvVg418IR3DFd7ZiFyt4-f-IgTdpJWZ8p3X0YkWwovf2Ic',
                width: '100%',
                height: 150,
              }}
              resizeMode="stretch"
            />
          </View>
          <View style={styles.card_right}>
            <Text style={styles.name}>
              Trường Đại học Khoa học Tự Nhiên TPHCM
            </Text>
            <Text numberOfLines={3} style={styles.shortDesc}>
              Đào tạo bài bản, những kỹ sư tương lai công nghệ
            </Text>
            <Text numberOfLines={2} style={styles.marjor}>
              Ngành chính: Công nghệ thông tin, thiết kế đồ họa
            </Text>
          </View>
        </View>
        <View style={styles.card_bottom}>
          <Text numberOfLines={3} style={styles.description}>
            Tạo một môi trường năng động, tích cực cho sinh viên. Nâng cao kỹ
            năng mềm
          </Text>
          <Text style={styles.grade}>Điểm tuyển sinh cao nhất: 20</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '90%',
    height: 240,
    borderRadius: 20,
    backgroundColor: '#fff',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  card_top: {
    width: '100%',
    height: '60%',
    flexDirection: 'row',
  },
  card_bottom: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  card_left: {
    width: 150,
  },
  card_right: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  img: {
    position: 'relative',
    borderRadius: 20,
    top: -3,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  shortDesc: {
    fontSize: 15,
    marginTop: 5,
  },
  marjor: {
    marginTop: 10,
    fontSize: 16,
    color: '#333',
    fontWeight: '400',
  },
  description: {
    fontSize: 15,
    fontWeight: '300',
    color: '#333',
  },
  grade: {
    fontSize: 16,
    color: 'red',
    marginTop: 10,
  },
});
