import React, { useState, useEffect, Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ItemContainer from '../Containers/ItemContainer';
import SearchContainer from '../Containers/SearchContainer';
import EditItemCard from '../Components/EditItemForm'




const Stack = createStackNavigator();

function SearchStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Search" component={SearchContainer} />
            <Stack.Screen name="ItemContainer" component={ItemContainer} />
            <Stack.Screen name="ItemEdit" component={EditItemCard} />
            
        </Stack.Navigator>
    );
}

export default SearchStack