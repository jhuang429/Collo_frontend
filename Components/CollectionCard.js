import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, Image, Button, TouchableHighlight } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux'


function CollectionCard(props) {
    const navigation = useNavigation()
    const [curCollection, setCurCollection] = useState(null)
    const [items, setItems] = useState(null)
    
    useEffect(() => {
        setCurCollection(props.collections.find(coll=>coll.id == props.collection_id))
    }, [props.collections])

    return (
        <View style={styles.container}>
            <View style={styles.subcontainer}>
            {curCollection && <Text>{curCollection.title}</Text>}
                <TouchableHighlight onPress={() => navigation.push('ItemContainer', { collection_id: curCollection.id, title:curCollection.title })}>

                    <View style={styles.thumbnail}>
                        {curCollection && items ?
                            curCollection.items.slice(0, 4).map(item => item.image ? <Image
                                key={item.id}
                                style={{ width: "50%", height: "50%" }}
                                source={{ uri: item.image }}
                                resizeMode={'cover'} // cover or contain its upto you view look
                            /> : null
                            ) :
                            
                            <Image
                                // key={curCollection.id}
                                style={{ width: "100%", height: "100%" }}
                                source={require('../assets/no-img.png')}
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
        alignItems:"center"
    },
    thumbnail: {
        borderWidth:1,     
        width: 150,
        height: 150,
        flexWrap: "wrap",
        borderColor:"grey",
    },
})

const msp = state => {
    return {
        collections: state.collections,
    }
}
export default connect(msp)(CollectionCard)

