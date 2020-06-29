import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Welcome from './Screens/Welcome';
import SignIn from './Screens/SignIn';
import SignUp from './Screens/SignUp';
import MainApp from './Screens/MainApp';
import About from './Screens/About';
import TechSpec from './Screens/TechSpec';
import { createStackNavigator } from '@react-navigation/stack';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { reducer } from './src/reducer'
import ErrorBoundary from 'react-native-error-boundary'
import {initCollectionsDB, initItemsDB} from './db'


export default function App() {


  //initialize sqlite collection database
  initCollectionsDB().then(()=>{
    console.log('Collections db is setup')
  }).catch(err=>{
    console.log("Collections db failed")
  })

    //initialize sqlite items database
    initItemsDB().then(()=>{
      console.log('Items db is setup')
    }).catch(err=>{
      console.log("Items db failed")
    })

  const Stack = createStackNavigator();

  const store = createStore(reducer, applyMiddleware(thunk))


  return (
    <ErrorBoundary>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="MainApp" component={MainApp} />
            <Stack.Screen name="About" component={About} />
            <Stack.Screen name="TechSpec" component={TechSpec} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </ErrorBoundary>
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
