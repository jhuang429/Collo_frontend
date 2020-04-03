import React from 'react'
import { View, Text, StyleSheet, Image, Button, TouchableHighlight } from 'react-native'

export default function CollectionCard(props) {

    const { title, data_title_1, data_title_2, data_title_3, data_title_4, data_title_5, data_title_6, data_title_7, data_title_8, data_title_9, data_title_10 } = props.collection

    const fields = [data_title_1, data_title_2, data_title_3, data_title_4, data_title_5, data_title_6, data_title_7, data_title_8, data_title_9, data_title_10].filter(field => field !== null)

    return (
        <View style={styles.container}>
            <View>
                <Text>{title}</Text>
                <TouchableHighlight onPress={() => props.navigation.push('ItemContainer',{fields: fields, items: props.collection.items})}>
                <Image
                    onPress={() => navigation.push('ItemContainer')}
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


