import React, { useState, useEffect, Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Collections from '../Containers/Collections';
import ItemContainer from '../Containers/ItemContainer';
import ItemCard from '../Components/ItemCard'
import EditItemCard from '../Components/EditItemForm'
import NewItemForm from '../Components/NewItemForm';
import EditCollectionForm from '../Components/EditCollectionForm'


const Stack = createStackNavigator();

function CollectionStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Collections" component={Collections} options={{ title: 'My Collection' }} />
            <Stack.Screen name="ItemContainer" component={ItemContainer} />
            <Stack.Screen name="ItemCard" component={ItemCard} />
            <Stack.Screen name="ItemEdit" component={EditItemCard} />
            <Stack.Screen name="NewItemForm" component={NewItemForm} />
            <Stack.Screen name="EditCollectionForm" component={EditCollectionForm} />
        </Stack.Navigator>
    );
}

export default CollectionStack