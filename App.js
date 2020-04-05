import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NewCollectionForm from './Screens/NewCollectionForm';
import CollectionCard from './Components/CollectionCard';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Collections from './Containers/Collections'
import Settings from './Screens/Settings'
import Search from './Screens/Search'
import { Ionicons } from '@expo/vector-icons';
import CollectionStack from './Screens/CollectionStack';

export default function App() {

  const Tab = createBottomTabNavigator();

  return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'My Collection') {
                iconName = focused ? 'ios-albums' : 'ios-albums';
              } else if (route.name === 'New') {
                iconName = focused ? 'ios-add-circle' : 'ios-add-circle-outline';
              }
              else if (route.name === 'Search') {
                iconName = focused ? 'ios-search' : 'ios-search';
              }
              else if (route.name === 'Settings') {
                iconName = focused ? 'ios-settings' : 'ios-settings';
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'purple',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="My Collection" component={CollectionStack} />
          <Tab.Screen name="New" component={NewCollectionForm} />
          <Tab.Screen name="Search" component={Search} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
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
