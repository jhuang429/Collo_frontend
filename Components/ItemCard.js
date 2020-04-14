import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, Button, TouchableHighlight } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux'


function ItemCard(props) {
    const navigation = useNavigation()

    const [curCollection, setCurCollection] = useState(null)

    useEffect(() => {
        setCurCollection(props.collections.find(coll => coll.id == props.collection_id))
    }, [props.collections])

    return (
        <View style={styles.container}>
            <View style={styles.subcontainer}>
                <Text>{props.item.title}</Text>
                <TouchableHighlight onPress={() => navigation.push('ItemEdit', { collection: curCollection, item: props.item })}>

                    <View style={styles.thumbnail}>
                        {props.item.image ?
                            <Image
                                style={{ width: 150, height: 150 }}
                                source={{ uri: props.item.image }}
                                resizeMode={'cover'} // cover or contain its upto you view look
                            /> :

                            <Image
                                style={{ width: 150, height: 150 }}
                                source={{ uri: 'https://dummyimage.com/640x360/fff/aaa' }}
                                resizeMode={'cover'} // cover or contain its upto you view look
                            />
                        }
                    </View>
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
    subcontainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    thumbnail: {
        borderWidth: 1,
        flexWrap: "wrap",
        borderColor: "grey",
    },


})

const msp = (state) => {
    return { collections: state.collections };
}
export default connect(msp)(ItemCard)