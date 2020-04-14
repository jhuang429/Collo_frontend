import React from 'react'
import { StyleSheet, Text, View, AsyncStorage, Button, Image, TouchableOpacity } from 'react-native';


function About(props) {

    return (
                <View style={styles.container}>
            <View style={styles.top}>
            </View>
            <Image style={{}} source={require('../assets/Logo.png')} />

            <View style={styles.motto}>
                <Text> Created by: Jerry Huang </Text>
                <Text> Email: Jhuang9240@gmail.com</Text>
                <Text>Github: jhuang429</Text>
                
                <Text>Flatiron Mod 5 project</Text>

                <Text>Create an app that stores and organizes photos seamlessly with data</Text>
                <Text>Use Cases:</Text>
                <Text>Comic book collector who regularly goes to ComicCon. Being able to have entire collection with info to buy, sell trade comicbooks</Text>
                <Text>Organize all your receipts so they are not cluterring your photo app. Keep documents for tax purpose or write down how much Sally owes for binger last night</Text>
                <Text>Sneaker enthusitic who just wants to know whats in this closet inorder to plan for tomorrow's outfit or to know how much he has spent on all his sneakers</Text>
                <Text>Macy's Buyer who goes out to a Ralph Lauren to checkout next season's collections. Seamlessly take photos, write notes and upload to team to start creating webpages and purchase orders.</Text>
                

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => props.navigation.push('TechSpec')}
                >
                    <Text>Tech Specs</Text>
                </TouchableOpacity>
                
                <Text> </Text>
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
        flex: 1
    },
    logo: {
        flex: 1,
        // width: "65%",
        // height: "10%",
        width: 250,
        height: 100,
        resizeMode: 'stretch'
    },
    buttons: {
        flex: 1,
    },
    motto: {
        flex: 7,
    },
    bottom: {
        flex: 1
    }
})


export default About