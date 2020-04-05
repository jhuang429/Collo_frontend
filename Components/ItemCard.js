import React from 'react'
import { View, Text, StyleSheet, Image, Button, TouchableHighlight } from 'react-native'

export default function ItemCard(props) {
    debugger

    // () => props.navigation.push('ItemEdit',{fields: fields, items: props.collection.items})

    return (
        <View style={styles.container}>
            <View>
                <Text>{props.item.title}</Text>
                <TouchableHighlight onPress={() => props.nagivation.push('ItemEdit',{fields: props.fields, item: props.item})}>
                <Image
                    // onPress={() => props.navigation.push('ItemEdit')}
                    style={{ width: 150, height: 150 }}
                    source={{ uri: 'https://dummyimage.com/640x360/fff/aaa' }}
                    resizeMode={'cover'} // cover or contain its upto you view look
                />
                </TouchableHighlight>

            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        flexDirection: "row",
        flexWrap: "wrap",
    },
})


