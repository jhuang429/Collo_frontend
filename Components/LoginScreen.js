import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput,TouchableOpacity } from 'react-native';

const LoginScreen = (props) => {


        const [email, setEmail] =useState("")
        const [password, setPassword] = useState("")
     
     const handleEmail = (text) => {
        setEmail(text)
     }
     const handlePassword = (text) => {
        setPassword(text)
     }
     const login = (email, pass) => {
        alert('email: ' + email + ' password: ' + pass)
     }
        return (
           <View style = {styles.container}>
              <TextInput style = {styles.input}
                 underlineColorAndroid = "transparent"
                 placeholder = "Email"
                 placeholderTextColor = "#9a73ef"
                 autoCapitalize = "none"
                 onChangeText = {handleEmail}/>
              
              <TextInput style = {styles.input}
                 underlineColorAndroid = "transparent"
                 placeholder = "Password"
                 placeholderTextColor = "#9a73ef"
                 autoCapitalize = "none"
                 onChangeText = {handlePassword}/>
              
              <TouchableOpacity
                 style = {styles.submitButton}
                 onPress = {
                    () => login(state.email, state.password)
                 }>
                 <Text style = {styles.submitButtonText}> Submit </Text>
              </TouchableOpacity>
           </View>
        )
     }

  export default LoginScreen
  
  const styles = StyleSheet.create({
     container: {
        paddingTop: 23
     },
     input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
     },
     submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
     },
     submitButtonText:{
        color: 'white'
     }
  })
