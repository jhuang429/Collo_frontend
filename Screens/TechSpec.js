import React, { useEffect } from 'react'
import { StyleSheet, Text, View, AsyncStorage, Button, Image } from 'react-native';
import colors from '../Constants/colors'


function TechSpec(props) {

    return (
        <View style={styles.container}>
                <Text> Languages</Text>
                <Text> Ruby</Text>
                <Text> Javascript</Text>
                <Text> </Text>

                <Text> Tech Stack</Text>
                <Text>Ruby on Rails</Text>
                <Text>React</Text>
                <Text>React Native</Text>
                <Text>ActiveStorage</Text>
                <Text>Heroku</Text>
                <Text>AWS S3</Text>
                <Text> </Text>

                <Text> Libraries</Text>
                <Text>React Native Base</Text>
                <Text>Ionic Icon</Text>
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


export default TechSpec