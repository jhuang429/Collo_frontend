import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import { SearchBar, Card } from 'react-native-elements';
import { connect } from 'react-redux'
import CollectionCard from '../Components/CollectionCard';
import { useNavigation } from '@react-navigation/native';



import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Icon,
    List,
    ListItem,
    Text,
    Thumbnail,
    Left,
    Body,
    Right,
    H1
} from "native-base";


function SearchContainer(props) {
    const navigation = useNavigation()
    const [search, setSearch] = useState("")

    const updateSearch = search => {
        setSearch(search.toLowerCase());
    };

    const [items, setItems] = useState([])

    useEffect(() => {
    let array = []
    props.collections.forEach(coll => {
        coll.items.forEach(item => array.push(item))
        setItems(array)
    }
    )},[])

    function extractFields(collections, collID){
        const coll = collections.find(coll=>coll.id == collID)

        return{ collection_id: coll.id, "data_title_1": coll.data_title_1, "data_title_2": coll.data_title_2, "data_title_3": coll.data_title_3, "data_title_4": coll.data_title_4, "data_title_5": coll.data_title_5, "data_title_6": coll.data_title_6, "data_title_7": coll.data_title_7, "data_title_8": coll.data_title_8, "data_title_9": coll.data_title_9, "data_title_10": coll.data_title_10 }
    }


    return (

        <Container style={styles.container}>
            <SearchBar
                placeholder="Search"
                onChangeText={updateSearch}
                value={search}
                lightTheme={true}
                containerStyle={{ backgroundColor: "white" }}
                inputContainerStyle={{ backgroundColor: "white" }}
            />

            <Content>
                <H1 style={styles.mb10}>Items</H1>
                <List>
                    {items && items.filter(coll=> coll.title.toLowerCase().includes(search)).map((item) => (
                        <ListItem thumbnail key={item.id}>
                            <Left>
                                <Thumbnail square size={55} source={{ uri: item.image }} />
                            </Left>
                            <Body>
                                <Text>{item.title}</Text>
                                <Text numberOfLines={1} note>
                                    {/* {data.note} */}
                                </Text>
                            </Body>
                            <Right>
                                <Button transparent onPress={() => navigation.push('ItemEdit', { fields: extractFields(props.collections,item.collection_id), item: item})}>
                                    <Text>View</Text>
                                </Button>
                            </Right>
                        </ListItem>
                    ))}


                <H1 style={styles.mb10}>Collections</H1>

                    {props.collections && props.collections.filter(coll=> coll.title.toLowerCase().includes(search)).map((data) => (
                        <ListItem thumbnail key={data.id}>
                            <Left>
                                <Thumbnail square size={55} source={ require('../assets/no-img.png') } />
                            </Left>
                            <Body>
                                <Text>{data.title}</Text>
                                <Text numberOfLines={1} note>
                                    {/* {data.note} */}
                                </Text>
                            </Body>
                            <Right>
                                <Button transparent onPress={() => navigation.push('ItemContainer', { fields: extractFields(props.collections,data.id), collectionId: data.id, collectionTitle: data.title })}>
                                    <Text>View</Text>
                                </Button>
                            </Right>
                        </ListItem>
                    ))}
                </List>
            </Content>




        </Container>








    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF"
    },
});





const msp = state => {
    return {
        collections: state.collections
    }
}



export default connect(msp)(SearchContainer)

