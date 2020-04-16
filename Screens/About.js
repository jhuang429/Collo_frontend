import React from 'react'
import { StyleSheet, View, AsyncStorage, Image, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body, Left, Icon, Button, Title, Right } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import colors from '../Constants/colors'


function About(props) {
    const navigation = useNavigation()

    return (

        <Container>
            <Header>
            <Left>
            <Button transparent onPress={()=>navigation.goBack()}>
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
                        <Text style={styles.CardHeader}>Flatiron School Mod 5 Final Project</Text>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text style={{ fontWeight: "bold" }}>collo-</Text>
                            <Text></Text>
                            <Text>prefix</Text>
                            <Text>1. a combining form meaning “gelatinous, glutinous; glue,” used in the formation of compound words</Text>
                            <Text></Text>
                            <Text>Image + Data</Text>
                            <Text></Text>
                            <TouchableOpacity
                                style={{color:"blue"}}
                                onPress={() => props.navigation.push('TechSpec')}>
                                <Text style={{color:"blue"}}>Tech Specs</Text>
                            </TouchableOpacity>
                        </Body>
                    </CardItem>

                </Card>

                <Card>
                    <CardItem header>
                        <Text style={styles.CardHeader}>The story:</Text>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text>
                                After being confined indoors for so long beacuse of COVID-19, I decided to start cleaning and organizing all my stuff. I never realized how much STUFF I have accumulated over the years. I started taking photos and jogging notes of all my things that I could sell on eBay or Poshmark. After stumbling with trying to upload photos to excel, I realize I could build am app that stores and organizes image seamlessly with data. It is revolutionary idea but it is a tool that could make peoples lives easier everyday. 
                            </Text>
                        </Body>
                    </CardItem>
                </Card>

                <Card>
                    <CardItem header>
                        <Text style={styles.CardHeader}>Who this App is for:</Text>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text ><Text style={{ fontWeight: "bold" }}>Collectors</Text><Text> ‣ Baseball card collector who cataloged his entire collection on his phone with notes in order to go to conventions to sell and show off this collection.</Text></Text>
                            <Text ><Text style={{ fontWeight: "bold" }}>Fashionistas</Text><Text> ‣ Snap photos of her entire shoes, handbag, and dress collection in order to plan tomorrow's outfit (and figure out how much over the budget she has spent on clothes and accessories).</Text></Text>
                            <Text ><Text style={{ fontWeight: "bold" }}>Personal Organization</Text><Text> ‣ Organize all your receipts so they are not cluttering your photo app. Keep documents for tax purposes or write down how much Sally owes for binger last night.</Text></Text>
                            <Text ><Text style={{ fontWeight: "bold" }}>Enterprise</Text><Text> ‣ Retail Buyer who goes out to market to checkout next season's Ralph Laurens collection. Seamlessly take photos, write notes and upload to team to start creating webpages and purchase orders.</Text></Text>
                        </Body>
                    </CardItem>
                </Card>

                <Card>
                    <CardItem header>
                        <Text style={styles.CardHeader}>Contact Info</Text>
                    </CardItem>
                    <CardItem>
                        <Body>

                            <Text>Created by: Jerry Huang </Text>
                            <Text>Email: Jhuang9240@gmail.com</Text>
                            <Text>Github: jhuang429</Text>

                        </Body>
                    </CardItem>

                </Card>
            </Content>

        </Container>

    )
}


const styles = StyleSheet.create({
    CardHeader: { fontWeight: "bold", color: "#7a42f4" }
})


export default About