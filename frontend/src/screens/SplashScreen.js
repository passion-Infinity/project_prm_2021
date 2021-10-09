import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import LottieView from 'lottie-react-native';

export default function SplashScreen({navigation}) {
  const [loop, setLoop] = useState(true);
  function transfer() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 5000);
    });
  }
  useEffect(() => {
    transfer().then(() => setLoop(false));
  }, []);
  return (
    <View style={styles.splash_screeen}>
      <LottieView
        source={require('../../assets/animation/Splash5.json')}
        autoPlay
        loop={true}
        speed={0.8}
      />
      <View style={styles.loading}>
        <LottieView
          source={require('../../assets/animation/Splash6.json')}
          autoPlay
          loop={loop}
          on
          onAnimationFinish={() => {
            console.log('finished animation');
            navigation.replace('GetStartedScreen');
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  splash_screeen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#56c1ff',
  },
  loading: {
    width: 180,
    height: 120,
    position: 'absolute',
    bottom: 20,
  },
});
