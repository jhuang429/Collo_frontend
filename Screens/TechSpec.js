import React, { useEffect } from 'react'
import { StyleSheet, View, AsyncStorage, Image, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body, Left, Icon, Button, Title, Right } from 'native-base';
import { useNavigation } from '@react-navigation/native';

import colors from '../Constants/colors'


function TechSpec(props) {
    const navigation = useNavigation()

    return (

        <Container>
            <Header>
                <Left>
                    <Button transparent onPress={() => navigation.goBack()}>
                        <Icon name='arrow-back' />
                        <Text>Back</Text>
                    </Button>
                </Left>
                <Body>
                    <Title>About</Title>
                </Body>

                <Right>
                    <Button transparent>
                    </Button>
                </Right>

            </Header>
            <Content>

                <Card>
                    <CardItem header>
                        <Text style={styles.CardHeader}>Languages</Text>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text></Text>
                            <Text ><Text style={{ fontWeight: "bold" }}>‣ Ruby</Text><Text> - Backend Language</Text></Text>
                            <Text ><Text style={{ fontWeight: "bold" }}>‣ Javascript</Text><Text> - Frontend Language</Text></Text>
                            <Text> </Text>
                        </Body>
                    </CardItem>
                </Card>

                <Card>
                    <CardItem header>
                        <Text style={styles.CardHeader}>Tech Stack</Text>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text ><Text style={{ fontWeight: "bold" }}>‣ Ruby on Rails</Text><Text> - Backend Framework</Text></Text>
                            <Text ><Text style={{ fontWeight: "bold" }}>‣ React / React Native</Text><Text> - Frontend Framework</Text></Text>
                            <Text ><Text style={{ fontWeight: "bold" }}>‣ Heroku</Text><Text> - Backend hosting</Text></Text>
                            <Text ><Text style={{ fontWeight: "bold" }}>‣ ActiveStorage</Text><Text> - Image Database</Text></Text>
                            <Text ><Text style={{ fontWeight: "bold" }}>‣ AWS S3</Text><Text> - Cloud Image Storage</Text></Text>
                            <Text> </Text>
                        </Body>
                    </CardItem>
                </Card>

                <Card>
                    <CardItem header>
                        <Text style={styles.CardHeader}>Libraries</Text>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text ><Text style={{ fontWeight: "bold" }}>‣ React Native Navigation</Text><Text> - Layout and Organization</Text></Text>
                            <Text ><Text style={{ fontWeight: "bold" }}>‣ React Native Base</Text><Text> - Styling and prebuilt components</Text></Text>
                            <Text ><Text style={{ fontWeight: "bold" }}>‣ Ionic Icons</Text><Text> - Icons</Text></Text>
                            <Text> </Text>
                        </Body>
                    </CardItem>
                </Card>


            </Content>

        </Container >

    )
}


const styles = StyleSheet.create({
    CardHeader: { fontWeight: "bold", color: "#7a42f4" }
})



//     return (
//         <View style={styles.container}>
//                 <Text> Languages</Text>
//                 <Text> Ruby</Text>
//                 <Text> Javascript</Text>
//                 <Text> </Text>

//                 <Text> Tech Stack</Text>
//                 <Text>Ruby on Rails</Text>
//                 <Text>React</Text>
//                 <Text>React Native</Text>
//                 <Text>ActiveStorage</Text>
//                 <Text>Heroku</Text>
//                 <Text>AWS S3</Text>
//                 <Text> </Text>


//         </View>
//     )
// }


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center"
//     },
//     top: {
//         flex: 3
//     },
//     logo: {
//         flex: 2,
//         // width: "65%",
//         // height: "10%",
//         width: 250,
//         height: 100,
//         resizeMode: 'stretch'
//     },
//     buttons: {
//         flex: 3,
//     },
//     motto: {
//         flex: 1,
//     },
//     bottom: {
//         flex: 3
//     }
// })


export default TechSpec