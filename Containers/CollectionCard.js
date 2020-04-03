import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function CollectionCard(props) {

    const {title, data_title_1, data_title_2, data_title_3, data_title_4, data_title_5, data_title_6, data_title_7, data_title_8, data_title_9, data_title_10} = props.collection
    const fields = [data_title_1, data_title_2, data_title_3, data_title_4, data_title_5, data_title_6, data_title_7, data_title_8, data_title_9, data_title_10].filter(field=> field !== null )

    return (
        <View style={styles.container}>
            <Text>{title}</Text>
            {fields.map(field => <Text>{field}</Text>)}
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


