import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import {connect} from 'react-redux'


function Settings() {
    return (
        <View style={styles.container}>
            {currentUser && <Text>currentUser.username</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
})


const mdp = dispatch => {
    return {
    
    }
}

const msp = state => {
    return {
        currentUser: state.currentUser
    }
}

export default connect(msp, mdp) (Settings)

