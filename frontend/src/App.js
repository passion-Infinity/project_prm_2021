/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './screens/SplashScreen';
import GetStartedScreen from './screens/GetStartedScreen';
import HomeScreen from './screens/HomeScreen';
import AreaScreen from './screens/AreaScreen';
import TabNavigation1 from './screens/TabNavigation1';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={({route}) => ({
            headerShown: false,
          })}
        />
        <Stack.Screen
          name="GetStartedScreen"
          component={GetStartedScreen}
          options={({route}) => ({
            headerShown: false,
          })}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={({route}) => ({
            headerShown: false,
          })}
        />
        <Stack.Screen
          name="AreaScreen"
          component={AreaScreen}
          options={({route}) => ({
            headerShown: false,
          })}
        />
        <Stack.Screen
          name="TabNavigation1"
          component={TabNavigation1}
          options={({route}) => ({
            headerShown: false,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
