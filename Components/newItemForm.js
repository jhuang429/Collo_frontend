import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import Colors from '../Constants/colors'


class NewItemForm extends Component {


    state = {
        title: '',
        user_id: 1,
        data_field_1: null,
        data_field_2: null,
        data_field_3: null,
        data_field_4: null,
        data_field_5: null,
        data_field_6: null,
        data_field_7: null,
        data_field_8: null,
        data_field_9: null,
        data_field_10: null
    }

    handleTitle = (text) => { this.setState({ title: text }) }
    handleField1 = (text) => { this.setState({ data_title_1: text }) }
    handleField2 = (text) => { this.setState({ data_title_2: text }) }
    handleField3 = (text) => { this.setState({ data_title_3: text }) }
    handleField4 = (text) => { this.setState({ data_title_4: text }) }
    handleField5 = (text) => { this.setState({ data_title_5: text }) }
    handleField6 = (text) => { this.setState({ data_title_6: text }) }
    handleField7 = (text) => { this.setState({ data_title_7: text }) }
    handleField8 = (text) => { this.setState({ data_title_8: text }) }
    handleField9 = (text) => { this.setState({ data_title_9: text }) }
    handleField10 = (text) => { this.setState({ data_title_10: text }) }

    handleSubmit = () => {

        fetch("http://localhost:3000/items", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ collection: this.state })
        })
    }


    render() {
        const { fields } = this.props.route.params

        return (
            <View>
                                <Image
                    // onPress={() => navigation.push('ItemContainer')}
                    style={{ width: 150, height: 150 }}
                    source={{ uri: 'https://dummyimage.com/640x360/fff/aaa' }}
                    resizeMode={'cover'} // cover or contain its upto you view look
                />
                <ScrollView style={styles.container}>
                    <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Item Name"
                        placeholderTextColor={Colors.primary}
                        autoCapitalize="none"
                        onChangeText={this.handleTitle} />

                    {fields.data_title_1 && <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder={fields.data_title_1}
                        placeholderTextColor={Colors.primary}
                        autoCapitalize="none"
                        onChangeText={this.handleTitle} />}

                    {fields.data_title_2 && <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder={fields.data_title_2}
                        placeholderTextColor={Colors.primary}
                        autoCapitalize="none"
                        onChangeText={this.handleTitle} />}

                    {fields.data_title_3 && <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder={fields.data_title_3}
                        placeholderTextColor={Colors.primary}
                        autoCapitalize="none"
                        onChangeText={this.handleTitle} />}

                    {fields.data_title_4 && <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder={fields.data_title_4}
                        placeholderTextColor={Colors.primary}
                        autoCapitalize="none"
                        onChangeText={this.handleTitle} />}

                    {fields.data_title_5 && <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder={fields.data_title_5}
                        placeholderTextColor={Colors.primary}
                        autoCapitalize="none"
                        onChangeText={this.handleTitle} />}

                    {fields.data_title_6 && <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder={fields.data_title_6}
                        placeholderTextColor={Colors.primary}
                        autoCapitalize="none"
                        onChangeText={this.handleTitle} />}

                    {fields.data_title_7 && <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder={fields.data_title_7}
                        placeholderTextColor={Colors.primary}
                        autoCapitalize="none"
                        onChangeText={this.handleTitle} />}

                    {fields.data_title_8 && <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder={fields.data_title_8}
                        placeholderTextColor={Colors.primary}
                        autoCapitalize="none"
                        onChangeText={this.handleTitle} />}

                    {fields.data_title_9 && <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder={fields.data_title_9}
                        placeholderTextColor={Colors.primary}
                        autoCapitalize="none"
                        onChangeText={this.handleTitle} />}

                    {fields.data_title_10 && <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder={fields.data_title_10}
                        placeholderTextColor={Colors.primary}
                        autoCapitalize="none"
                        onChangeText={this.handleTitle} />}



                </ScrollView>

                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={this.handleSubmit}>
                    <Text style={styles.submitButtonText}> Submit </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export default NewItemForm

const styles = StyleSheet.create({
    container: {
    },
    input: {
        margin: 5,
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
    submitButtonText: {
        color: 'white'
    }
})

