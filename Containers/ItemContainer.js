import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CollectionCard from './CollectionCard';


function ItemContainer({ route, navigation }) {

    return (
        <View>
                {route.params.items.map(item => <Text key={item.id}>{item.title}</Text>)}
                
                {route.params.fields.map(field => <Text key={field}>{field}</Text>)}
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",

    }
})

export default ItemContainer