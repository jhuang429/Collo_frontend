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
    
    
    function SignIn() {
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
              <Title>Sign In</Title>
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
            </Form>
            <Button block style={{ margin: 15, marginTop: 50, color: "white x "}}>
              <Text>Sign In</Text>
            </Button>

            <Text style={{marginTop: 50, marginLeft:20}} onPress={() => navigation.push("SignUp")}>No Account? Sign up</Text>
          </Content>
        </Container>
      );
}

export default SignIn

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#FFF"
    }
  });
  

