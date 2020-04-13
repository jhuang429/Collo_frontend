import React, { Component, useState, useEffect } from "react";
import { StyleSheet, Alert } from 'react-native'
import {connect} from 'react-redux'
import { signIn, fetchCollections } from '../src/actionCreators'


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


function SignIn(props) {
    const navigation = useNavigation()

    const [form, setForm] = useState({
        username: "",
        password: "",
    })


    const handleUserName = (text) => {
        setForm(prevState => ({ ...prevState, username: text }))
    }

    const handlePassword = (text) => {
        setForm(prevState => ({ ...prevState, password: text }))
    }

    const handleSubmit = () => {
        if (form.username == "") {
            return Alert.alert("Username cannot be blank")
        }
        else if (form.password == "") {
            return Alert.alert("Please enter password")
        }
        else {
            props.signIn({ username: form.username, password: form.password })
            props.fetchCollections(props.token)
        }


    }

    useEffect(() => {
        if(props.currentUser){
        navigation.push("MainApp")}
    }, [props.currentUser])



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
                        <Input value={form.username} onChangeText={handleUserName} />
                    </Item>
                    <Item stackedLabel last>
                        <Label>Password</Label>
                        <Input secureTextEntry value={form.password} onChangeText={handlePassword} />
                    </Item>
                </Form>
                <Button block style={{ margin: 15, marginTop: 50, color: "white x " }} onPress={handleSubmit}>
                    <Text>Sign In</Text>
                </Button>

                <Text style={{ marginTop: 50, marginLeft: 20 }} onPress={() => navigation.push("SignUp")}>Don't have an account? Sign up</Text>
                <Text style={{ marginTop: 20, marginLeft: 20 }} onPress={() => Alert.alert("Please email customer service")}>Forgot password/Username?</Text>
            </Content>
        </Container>
    );
}

const mdp = dispatch => {
    return {
        signIn: (form)=>dispatch(signIn(form)),
        fetchCollections: (token)=>dispatch(fetchCollections(token))
    }
}

const msp = state => {
    return {
        currentUser: state.currentUser,
        token: state.token
    }
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF"
    }
});

export default connect(msp, mdp) (SignIn)

