import React, { useState, useEffect, Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Collections from '../Containers/Collections';
import ItemContainer from '../Containers/ItemContainer';
import ItemCard from '../Components/ItemCard'
import EditItemCard from '../Components/EditItemForm'
import NewItemForm from '../Components/NewItemForm';
import NewCollectionForm from '../Screens/NewCollectionForm'


const Stack = createStackNavigator();

function CollectionStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Collections" component={Collections} options={{ title: 'My Collection' }} />
            <Stack.Screen name="ItemContainer" component={ItemContainer} />
            <Stack.Screen name="ItemCard" component={ItemCard} />
            <Stack.Screen name="ItemEdit" component={EditItemCard} />
            <Stack.Screen name="NewItemForm" component={NewItemForm} />
            {/* <Stack.Screen name="NewCollectionForm" component={NewCollectionForm} /> */}
        </Stack.Navigator>
    );
}

export default CollectionStack