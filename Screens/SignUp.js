import React, { Component } from "react";
import { StyleSheet } from 'react-native'
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Item,
  Label,
  Input,
  Body,
  Left,
  Right,
  Icon,
  Form,
  Text
} from "native-base";
import colors from '../Constants/colors'
import { useNavigation } from '@react-navigation/native';
    
    
    function SignUp() {
        const navigation = useNavigation()
    return (
        <Container style={styles.container}>
          <Header>
            <Left>
              <Button transparent onPress={() => navigation.goBack()}>
                <Icon name="arrow-back" />
              </Button>
            </Left>
            <Body>
              <Title>New Account</Title>
            </Body>
            <Right />
          </Header>
  
          <Content>
            <Form>
              <Item stackedLabel>
                <Label>Username</Label>
                <Input />
              </Item>
              <Item stackedLabel last>
                <Label>Password</Label>
                <Input secureTextEntry />
              </Item>
              <Item stackedLabel last>
                <Label>Confirm Password</Label>
                <Input secureTextEntry />
              </Item>
              <Item stackedLabel last>
                <Label>Email</Label>
                <Input secureTextEntry />
              </Item>
            </Form>
            <Button block style={{ margin: 15, marginTop: 50, color: "white x "}}>
              <Text>Create New Account</Text>
            </Button>
            <Text style={{marginTop: 50, marginLeft:20}} onPress={() => navigation.goBack()}>Already have an Account? Sign In </Text>

          </Content>
        </Container>
      );
}

export default SignUp

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#FFF"
    }
  });
  

