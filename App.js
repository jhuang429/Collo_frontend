import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Collections from './Containers/Collections'
import Welcome from './Screens/Welcome';
import SignIn from './Screens/SignIn';
import SignUp from './Screens/SignUp';
import MainApp from './Screens/MainApp';
import { createStackNavigator } from '@react-navigation/stack';


export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator   screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="MainApp" component={MainApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    marginTop: 500,
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  },
});
