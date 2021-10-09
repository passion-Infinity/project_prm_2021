import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Platform, TouchableOpacity, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import AreaScreen from './AreaScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigation1() {
  return (
    <Tab.Navigator
      initialRouteName="AreaScreen"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#fff',
          position: 'absolute',
          bottom: 20,
          marginHorizontal: 20,
          alignItems: 'center',
          justifyContent: 'center',
          // Max Height...
          height: 60,
          borderRadius: 10,
          // Shadow...
          shadowColor: '#000',
          shadowOpacity: 0.06,
          shadowOffset: {
            width: 10,
            height: 10,
          },
          paddingHorizontal: 20,
        },
      }}>
      {
        // Tab Screens....
        // Tab ICons....
      }
      <Tab.Screen
        name={'HomeScreen'}
        component={HomeScreen}
        options={({route}) => ({
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View>
              <FontAwesome5
                name="home"
                size={focused ? 28 : 22}
                color={focused ? 'red' : 'gray'}></FontAwesome5>
            </View>
          ),
        })}></Tab.Screen>

      {
        // Extra Tab Screen For Action Button..
      }

      <Tab.Screen
        name={'ActionButton'}
        component={EmptyScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TouchableOpacity>
              <View
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: 'red',
                  borderRadius: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: Platform.OS == 'android' ? 50 : 30,
                }}>
                <FontAwesome5 name="qrcode" size={30} color={'#fff'} />
              </View>
            </TouchableOpacity>
          ),
        }}></Tab.Screen>

      <Tab.Screen
        name={'AreaScreen'}
        component={AreaScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View>
              <FontAwesome5
                name="clipboard-list"
                size={focused ? 28 : 22}
                color={focused ? 'red' : 'gray'}></FontAwesome5>
            </View>
          ),
        }}></Tab.Screen>
    </Tab.Navigator>
  );
}

function EmptyScreen() {
  return (
    <View
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}></View>
  );
}
