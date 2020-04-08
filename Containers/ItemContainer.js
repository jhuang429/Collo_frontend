import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View, Button } from 'react-native';
import CollectionCard from '../Components/CollectionCard';
import ItemCard from '../Components/ItemCard';


function ItemContainer({ route }) {

    return (
        <ScrollView>
        <View style={styles.screen}>
             {route.params.items.map(item => (
                    <ItemCard key={item.id} item={item} nagivation={route.params.navigation} fields={route.params.fields} />
            ))}
        </View>
            <Button title="Add" onPress={() => { route.params.navigation.push('NewItemForm', { fields: route.params.fields }) }} />
     </ScrollView>
    )
}





const styles = StyleSheet.create({
    screen: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    },
    CollectionCard: {
    alignContent:"center"
    }
    })

export default ItemContainer