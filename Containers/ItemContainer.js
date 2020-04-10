import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View, Button } from 'react-native';
import CollectionCard from '../Components/CollectionCard';
import ItemCard from '../Components/ItemCard';
import { connect } from 'react-redux'
import { useNavigation } from '@react-navigation/native';


function ItemContainer({ route, collections }) {

    const navigation = useNavigation()


    navigation.setOptions({ title: route.params.collectionTitle })

    const [collectionId, setCollectionId] = useState(null)

    useEffect( 
        ()=> route.params.collectionId && setCollectionId(route.params.collectionId),[]
    )

    return (
        <ScrollView>
        <View style={styles.screen}>
             {collectionId && collections.find(coll=> coll.id == collectionId).items.map(item => (
                    <ItemCard key={item.id} item={item} fields={route.params.fields} />
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


const msp = (state) => {
    return { collections: state.collections };
}


export default connect(msp)( ItemContainer)