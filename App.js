import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NewCollectionForm from './Components/NewCollectionForm';
import CollectionCard from './Containers/CollectionCard';
import NewItemForm from './Components/NewItemForm';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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
    <Tab.Navigator>
      <Tab.Screen name="Home" component={NewCollectionForm} />
      <Tab.Screen name="Settings" component={NewCollectionForm} />
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
