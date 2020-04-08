import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import CollectionCard from '../Components/CollectionCard';


function Collections(props) {

    const [collections, setCollections] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/collections").then(resp => resp.json()).then(data => setCollections(data))
    }, []
    )

    return (
            <ScrollView>
                <View style={styles.screen}>
                {collections.map(coll => <CollectionCard style={styles.CollectionCard} collection={coll} key={coll.id} navigation={props.navigation}/>)}
                </View>
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

export default Collections