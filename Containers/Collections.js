import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Button } from 'react-native';
import CollectionCard from '../Components/CollectionCard';
import { connect } from 'react-redux'
import { fetchCollections } from '../src/actionCreators'
import { SearchBar } from 'react-native-elements';



function Collections(props) {

    const [search, setSearch] = useState("")

    const updateSearch = search => {
        setSearch(search.toLowerCase() );
    };

    useEffect(() => {
        props.token ? props.fetchCollections(props.token) : null
    }, [props.token]
    )
    
    return (
        <ScrollView>
        <SearchBar
            placeholder="Search Collections"
            onChangeText={updateSearch}
            value={search}
            lightTheme ={true}
            containerStyle={{backgroundColor:"white"}}
            inputContainerStyle={{backgroundColor:"white"}}
        />
            <View style={styles.screen}>
                {props.collections.length > 0 ?
                    props.collections.filter(coll=> coll.title.toLowerCase().includes(search))
                    
                    .map(coll => <CollectionCard style={styles.CollectionCard} collection_id={coll.id} key={coll.id} />)
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
        collections: state.collections,
        token: state.token
    }
}

const mdp = (dispatch) => {
    return {
        fetchCollections: (token) => dispatch(fetchCollections(token))
    }
}

export default connect(msp, mdp)(Collections)