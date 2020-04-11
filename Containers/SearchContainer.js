import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { SearchBar } from 'react-native-elements';


function SearchContainer() {
    const [search, setSearch] = useState("")

    const updateSearch = search => {
        setSearch(search.toLowerCase());
    };
    return (
        <ScrollView>
        <SearchBar
            placeholder="Search Collections"
            onChangeText={updateSearch}
            value={search}
            lightTheme={true}
            containerStyle={{ backgroundColor: "white" }}
            inputContainerStyle={{ backgroundColor: "white" }}
        />
        <View style={styles.container}>

            <Text>Search</Text>
        </View>
        </ScrollView>
    )
}

export default SearchContainer

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
})



