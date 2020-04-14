import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View, Button } from 'react-native';
import CollectionCard from '../Components/CollectionCard';
import ItemCard from '../Components/ItemCard';
import { connect } from 'react-redux'
import { useNavigation } from '@react-navigation/native';


function ItemContainer(props) {

    const navigation = useNavigation()


    navigation.setOptions({ title: props.route.params.title, headerRight: () => (
        <Button
        onPress={() => { navigation.push('EditCollectionForm', { collection: curCollection }) }}
          title="Edit"
          margin="10"
        />
      ),})

      const [curCollection, setCurCollection] = useState(null)

      useEffect(() => {
          setCurCollection(props.collections.find(coll=>coll.id == props.route.params.collection_id))
      }, [props.collections])


    return (
        <ScrollView>
        <View style={styles.screen}>
             {curCollection && curCollection.items.map(item => (
                    <ItemCard key={item.id} item={item} collection_id={curCollection.id} />
            ))}
        </View>
            <Button title="Add" onPress={() => { navigation.push('NewItemForm', { collection_id: curCollection.id }) }} />
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