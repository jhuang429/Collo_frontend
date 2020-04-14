import React, { useState, useEffect, Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ItemContainer from '../Containers/ItemContainer';
import SearchContainer from '../Containers/SearchContainer';
import EditItemCard from '../Components/EditItemForm'
import NewItemForm from '../Components/NewItemForm';
import EditCollectionForm from '../Components/EditCollectionForm'




const Stack = createStackNavigator();

function SearchStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Search" component={SearchContainer} />
            <Stack.Screen name="ItemContainer" component={ItemContainer} />
            <Stack.Screen name="ItemEdit" component={EditItemCard} />
            <Stack.Screen name="NewItemForm" component={NewItemForm} />
            <Stack.Screen name="EditCollectionForm" component={EditCollectionForm} />
            
        </Stack.Navigator>
    );
}

export default SearchStack