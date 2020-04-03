import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CollectionCard from './CollectionCard';


function Collections(props) {

    const [collections, setCollections] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/collections").then(resp => resp.json()).then(data => setCollections(data))
  }, []
  )

    return (
        <View style={styles.screen}>
            {collections.map(coll => <CollectionCard collection={coll} key={coll.id} navigation={props.navigation}/>)}
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

export default Collections