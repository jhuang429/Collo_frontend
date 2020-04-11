import React, { useState, useEffect, Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ItemContainer from '../Containers/ItemContainer';
import SearchContainer from '../Containers/SearchContainer';




const Stack = createStackNavigator();

function SearchStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="ItemContainer" component={ItemContainer} />
        </Stack.Navigator>
    );
}

export default SearchStack