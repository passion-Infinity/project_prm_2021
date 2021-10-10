import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

function GetStartedScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>DECISION'S</Text>
      <Image
        style={{
          width: '100%',
          height: 320,
        }}
        source={require('../../assets/images/bg.jpg')}
        resizeMode="cover"
      />
      <View style={styles.content}>
        <Text style={styles.content_text}>Admission University</Text>
        <Text style={styles.content_text}>Help you make a right decision</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('TabNavigation1');
        }}>
        <Text style={styles.btn}>Get Started</Text>
      </TouchableOpacity>
      <Text style={styles.footer_text}>Term &amp; Condition</Text>
    </View>
  );
}

export default GetStartedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    position: 'absolute',
    top: 100,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 200,
  },
  content_text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  btn: {
    position: 'relative',
    top: 100,
    width: 350,
    height: 50,
    lineHeight: 50,
    fontSize: 20,
    fontWeight: '800',
    color: '#fff',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#b39ddb',
    backgroundColor: '#b39ddb',
    borderRadius: 10,
  },
  footer_text: {
    position: 'relative',
    top: 160,
    fontWeight: '400',
    color: '#000',
  },
});
