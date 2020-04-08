import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Button, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import colors from '../Constants/colors'


function Welcome({ navigation }) {

    return (
        <View style={styles.container}>
            
            <View style={styles.top}>
            </View>

            <Image style={styles.logo} source={require('../assets/Logo.png')} />

            <View style={styles.motto}>
                <Text style={{ color: colors.primary }}> Image organization made easy</Text>
            </View>

            <View styles={styles.buttons}>
                <Button title="Sign In / Sign Up" onPress={() => navigation.push('SignIn')} />
                <Button title="Continue" onPress={() => navigation.push('MainApp')} />
            </View>

            <View style={styles.bottom}>
            </View>

        </View>
    )
}

export default Welcome

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

