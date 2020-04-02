import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function CollectionCard(props) {

    const {title} = props.collection

    return (
        <View style={styles.container}>
            <Text>{title}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
       flex: 1,
       alignItems: "center",
       justifyContent: "center"
    },
 })


