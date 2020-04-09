import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Welcome from './Screens/Welcome';
import SignIn from './Screens/SignIn';
import SignUp from './Screens/SignUp';
import MainApp from './Screens/MainApp';
import { createStackNavigator } from '@react-navigation/stack';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { reducer } from './src/reducer'


export default function App() {

  const Stack = createStackNavigator();

  const store = createStore(reducer, applyMiddleware(thunk))

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="MainApp" component={MainApp} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
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
