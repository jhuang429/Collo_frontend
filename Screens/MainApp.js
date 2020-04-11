import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NewCollectionForm from './NewCollectionForm';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Settings from './Settings'
import { Ionicons } from '@expo/vector-icons';
import CollectionStack from './CollectionStack';
import SearchStack from './SearchStack';



export default function MainApp() {

  const Tab = createBottomTabNavigator();

  return (
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
          <Tab.Screen name="Search" component={SearchStack} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
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
