import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { SearchBar, Card, ListItem, Button, Icon } from 'react-native-elements';
import { connect } from 'react-redux'
import CollectionCard from '../Components/CollectionCard';


function SearchContainer(props) {
    const [search, setSearch] = useState("")

    const updateSearch = search => {
        setSearch(search.toLowerCase());
    };


    const users = [
        {
           name: 'brynn',
           avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
        }
       ]

    return (
        <ScrollView>
            <SearchBar
                placeholder="Search"
                onChangeText={updateSearch}
                value={search}
                lightTheme={true}
                containerStyle={{ backgroundColor: "white" }}
                inputContainerStyle={{ backgroundColor: "white" }}
            />

<Card title="CARD WITH DIVIDER">
  {
    users.map((u, i) => {
      return (
        <View key={i} >
          <Image
            resizeMode="cover"
            source={{ uri: u.avatar }}
          />
          <Text style={styles.name}>{u.name}</Text>
        </View>
      );
    })
  }
</Card>


            <Card title="Collections" containerStyle={{ width: "100%", margin: 0 }}>

                                {
                        props.collections.map(coll => {
                            return (
                                <View key={coll.id} style={styles.user}>
                                    <Image
                                        style={styles.image}
                                        resizeMode="cover"
                                        source={{ uri: coll.items[0].image }}
                                    />
                                    <Text style={styles.name}>{coll.title}</Text>
                                </View>
                            );
                        })
                    }
            
 {/*  */}

                    
                
            </Card>


        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
})




const msp = state => {
    return {
        collections: state.collections
    }
}



export default connect(msp)(SearchContainer)

