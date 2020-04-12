import React, { Component, useState } from "react";
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
    const [form, setForm] = useState({
        username: "",
        password: "",
        passwordConfirmation: "",
        email: "",

    })

    const handleUserName = (text) =>{
        setForm(prevState=> ({...prevState, username: text}))
    }
    const handlePassword = (text) =>{
        setForm(prevState=> ({...prevState, password: text}))
    }
    const handlePassConf = (text) =>{
        setForm(prevState=> ({...prevState, passwordConfirmation: text}))
    }
    const handleEmail = (text) =>{
        setForm(prevState=> ({...prevState, email: text}))
    }


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
                        <Input value={form.username} onChangeText={handleUserName}/>
                    </Item>
                    <Item stackedLabel last>
                        <Label>Password</Label>
                        <Input secureTextEntry value={form.password} onChangeText={handlePassword}/>
                    </Item>
                    <Item stackedLabel last>
                        <Label>Confirm Password</Label>
                        <Input secureTextEntry value={form.passwordConfirmation} onChangeText={handlePassConf}/>
                    </Item>
                    <Item stackedLabel last>
                        <Label>Email</Label>
                        <Input email value={form.email} onChangeText={handleEmail}/>
                    </Item>
                </Form>
                <Button block style={{ margin: 15, marginTop: 50, color: "white x " }}>
                    <Text>Create New Account</Text>
                </Button>
                <Text style={{ marginTop: 50, marginLeft: 20 }} onPress={() => navigation.goBack()}>Already have an Account? Sign In </Text>

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


