import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Collections from '../Containers/Collections';


const Stack = createStackNavigator();

function CollectionStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Collections" component={Collections} />
        </Stack.Navigator>
    );
}

export default CollectionStack