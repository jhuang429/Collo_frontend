import React from 'react'
import { StyleSheet, View, TextInput, TouchableOpacity, ScrollView, Text } from 'react-native';
import {connect} from 'react-redux'
import { logOut } from '../src/actionCreators'

import { useNavigation } from '@react-navigation/native';



import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Item,
    Label,
    Input,
    Body,
    Left,
    Right,
    Icon,
    Form,
    
} from "native-base";


function Settings(props) {
    
    const navigation = useNavigation()

    const handleSubmit = () => {
        props.logOut()
        navigation.push("Welcome")
        }

    return (
        <View style={styles.container}>
            {props.currentUser && <Text>{props.currentUser.username}</Text>}
            <Button block style={{ margin: 15, marginTop: 50, color: "white x " }} onPress={handleSubmit}>
                    <Text>Log Out</Text>
                </Button>
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
        logOut: ()=>dispatch( logOut() )
    }
}

const msp = state => {
    return {
        currentUser: state.currentUser,
        token: state.token
    }
}

export default connect(msp, mdp) (Settings)

