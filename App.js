import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NewCollectionForm from './Screens/NewCollectionForm';
import CollectionCard from './Containers/CollectionCard';
import NewItemForm from './Components/NewItemForm';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Collections from './Screens/Collections'
import Settings from './Screens/Settings'
import { Ionicons } from '@expo/vector-icons';

export default function App() {

  const [collections, setCollections] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/collections").then(resp => resp.json()).then(data => setCollections(data))
  }, []
  )

  {/* <NewCollectionForm /> */ }
{/* {collections.map(coll=><CollectionCard collection={coll} key={coll.id}/>)} */ }
{/* <NewItemForm /> */ }

  const Tab = createBottomTabNavigator();

  return (
  <NavigationContainer>
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'My Collection') {
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
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
      <Tab.Screen name="My Collection" component={NewCollectionForm} />
      <Tab.Screen name="New" component={NewCollectionForm} />
      <Tab.Screen name="Search" component={NewCollectionForm} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  },
});
