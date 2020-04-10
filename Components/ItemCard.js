import React from 'react'
import { View, Text, StyleSheet, Image, Button, TouchableHighlight } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default function ItemCard({ item, fields }) {

    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <View>
                <Text>{item.title}</Text>
                <TouchableHighlight onPress={() => navigation.push('ItemEdit', { fields: fields, item: item})}>

                    {item.image ?
                        <Image
                            style={{ width: 150, height: 150 }}
                            source={{ uri: item.image }}
                            resizeMode={'cover'} // cover or contain its upto you view look
                        /> :

                        <Image
                            style={{ width: 150, height: 150 }}
                            source={{ uri: 'https://dummyimage.com/640x360/fff/aaa' }}
                            resizeMode={'cover'} // cover or contain its upto you view look
                        />

                    }
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


