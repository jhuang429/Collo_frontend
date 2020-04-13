import React, { useEffect } from 'react'
import { StyleSheet, Text, View, AsyncStorage, Button, Image, TouchableOpacity} from 'react-native';
import colors from '../Constants/colors'
import { connect } from 'react-redux'
import { autoSignIn, signIn, fetchCollections, logOut } from '../src/actionCreators'


function Welcome(props) {



    useEffect(() => {
        const checkTokenAsync = async () => {
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
                            props.autoSignIn(token)
                        }
                    })
            }
        };
        checkTokenAsync();
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
                        {props.currentUser && <Text>Welcome back</Text>}
                        <Button title={`Continue as ${props.currentUser.username}`} onPress={() => props.navigation.push('MainApp')} />
                        {/* <Text style={{ marginTop: 60, color: "blue" }} >Sign in with a different account?</Text> */}
                        <Button title="Sign in with a different account?" style={{ marginTop: 60, color: "blue" }} onPress={() => props.logOut()} />
                    </View>
                    :
                    <Button title="Sign In / Sign Up" onPress={() => props.navigation.push('SignIn')} />
                }
            </View>

            <View style={styles.bottom}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => props.navigation.push('About')}
                >
                    <Text>About</Text>
                </TouchableOpacity>
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