import React, { useEffect } from 'react'
import { StyleSheet, Text, View, AsyncStorage, Button, Image, TouchableOpacity } from 'react-native';
import colors from '../Constants/colors'
import { connect } from 'react-redux'
import { autoSignIn, signIn, fetchCollections, logOut } from '../src/actionCreators'


function Welcome(props) {

    return (
        <View style={styles.container}>

            <View style={styles.top}>
            </View>

            <Image style={styles.logo} source={require('../assets/Logo.png')} />

            <View style={styles.motto}>
                <Text style={{ color: colors.primary }}> Image organization made easy</Text>
            </View>

            <View styles={styles.buttons}>
                    <View style={styles.body}>
                        <Button title={`Welcome`} onPress={() => props.navigation.push('MainApp')} />
                    </View>
            </View>

            <View style={styles.bottom}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => props.navigation.push('About')}
                >
                    <Text style={{color:"blue",fontSize:18}}>About</Text>
                </TouchableOpacity>

               <Text>©2020 Big Table LLC, Jerry Huang</Text> 
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    top: {
        flex: 3
    },
    logo: {
        flex: 2,
        // width: "65%",
        // height: "10%",
        width: 250,
        height: 100,
        resizeMode: 'stretch'
    },
    body: {
        justifyContent: "center",
        alignItems: "center"
    },

    buttons: {

        flex: 3,
    },
    motto: {
        flex: 1,
    },
    bottom: {
        justifyContent: "center",
        alignItems: "center",
        marginTop:150,
        marginBottom:50,

    }
})

const mdp = dispatch => {
    return {
        signIn: (form) => dispatch(signIn(form)),
        logOut: () => dispatch(logOut()),
        autoSignIn: (token) => dispatch(autoSignIn(token)),
        fetchCollections: (token) => dispatch(fetchCollections(token))
    }
}
const msp = state => {
    return {
        currentUser: state.currentUser,
        token: state.token
    }
}
export default connect(msp, mdp)(Welcome)