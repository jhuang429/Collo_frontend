import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import CollectionCard from '../Components/CollectionCard';
import ItemCard from '../Components/ItemCard';


function ItemContainer({ route }) {

    return (
        <View>
            {route.params.items.map(item => (
                <View>
                    <ItemCard key={item.id} item={item} nagivation={route.params.navigation} fields={route.params.fields} />
                </View>
            ))}
            <Button title="Add" onPress={() => { route.params.navigation.push('NewItemForm', { fields: route.params.fields }) }} />

        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

    }
})

export default ItemContainer