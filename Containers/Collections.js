import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import CollectionCard from '../Components/CollectionCard';
import { connect } from 'react-redux'
import { fetchCollections } from '../src/actionCreators'


function Collections(props) {

    // const [collections, setCollections] = useState([])

    useEffect(() => {
        props.fetchCollections()
        // fetch("http://localhost:3000/collections").then(resp => resp.json()).then(data => setCollections(data))
    }, []
    )

    return (
        <ScrollView>
            <View style={styles.screen}>
                {props.collections.length > 0 ?
                    props.collections.map(coll => <CollectionCard style={styles.CollectionCard} collection={coll} key={coll.id} />)
                    :
                    <Text>No Collections</Text>}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        margin: 15,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around"
    },
    CollectionCard: {
        alignContent: "center"
    }
})

const msp = state => {
    return {
        collections: state.collections
    }
}

const mdp = (dispatch) => {
    return {
        fetchCollections: () => dispatch(fetchCollections())
    }
}

export default connect(msp, mdp)(Collections)