import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, AsyncStorage, Button, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import colors from '../Constants/colors'
import { connect } from 'react-redux'


function Welcome(props) {



    useEffect(() => {
        const bootstrapAsync = async () => {
            let token;

            try {
                token = await AsyncStorage.getItem('token');
            } catch (e) {
                // Restoring token failed
            }

            if (token) {
                //get user info if token is present 
                fetch("http://localhost:3000/autologin", {
                    headers: {
                        "Authorization": token
                    }
                })
                    .then(res => res.json())
                    .then(response => {
                        if (response.errors) {
                            Alert.alert(response.errors)
                        } else {
                            // this.setState({
                            //   currentUser: response
                            // })
                        }
                    })
            }

        };

        bootstrapAsync();

    }, []
    )


    return (
        <View style={styles.container}>

            <View style={styles.top}>
            </View>

            <Image style={styles.logo} source={require('../assets/Logo.png')} />

            <View style={styles.motto}>
                <Text style={{ color: colors.primary }}> Image organization made easy</Text>
            </View>

            <View styles={styles.buttons}>
                {props.token ?
                    <View>
                        <Text> Welcome back, {props.currentUser.username}</Text>
                        <Button title="Continue" onPress={() => props.navigation.push('MainApp')} />
                    </View>
                    :
                    <Button title="Sign In / Sign Up" onPress={() => props.navigation.push('SignIn')} />
                }
            </View>

            <View style={styles.bottom}>
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
    buttons: {
        flex: 3,
    },
    motto: {
        flex: 1,
    },
    bottom: {
        flex: 3
    }
})

const mdp = dispatch => {
    return {
        signIn: (form) => dispatch(signIn(form))
    }
}

const msp = state => {
    return {
        currentUser: state.currentUser,
        token: state.token
    }
}


export default connect(msp, mdp)(Welcome)